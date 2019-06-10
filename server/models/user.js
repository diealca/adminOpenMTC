const mongoose = require ('mongoose')
const validator = require ('validator')

const Schema = mongoose.Schema
const userSchema = new Schema({
    user: {
        type:String,
        required: [true,'Usuario requerido.'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'Contraseña requerida.'],
        select: false,
    }, 
    role: {
        type: String,
        required: [true,'Rol requerido.'],
        enum: ['administrador','operador'],
        message: 'El rol no esta definido.',
    },
    email: {
        type: String,
        validate: (value) =>validator.isEmail(value),
        message:'No es un correo válido.',
    },
    permisos:[{type:Schema.Types.ObjectId, ref:'permiso'}],
});

module.exports = mongoose.model('user', userSchema,'users')