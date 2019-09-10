const mongoose =require ('mongoose')

const Schema = mongoose.Schema
const deviceSchema = new Schema({
    urilDispositivo: {
        type: String,
        require:[true, 'Ruta del dispositivo requerido'],
        unique: true
    },
    tipo: {
        type: String,
        enum: ['sensor','actuador'],
        message: 'El tipo de dispositvo no esta definido.',
    },
    descripcion: String

})
module.exports = mongoose.model('device', deviceSchema,'devices')