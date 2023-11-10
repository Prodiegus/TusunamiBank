import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    apellidoPaterno: String,
    apellidoMaterno: String,
    nombres: String,
    rut: String,
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;