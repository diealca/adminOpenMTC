const mongoose =require ('mongoose')

const Schema = mongoose.Schema
const permisoSchema = new Schema({
    tipo: {
        type: String,
        values:['readonly','readwrite'],
        message:['Tipo de permiso no permitido']
    },
    device: {type:Schema.Types.ObjectId, ref:'device'}
})
module.exports = mongoose.model('permiso', permisoSchema,'permisos')