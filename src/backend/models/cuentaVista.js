import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cuentaVistaSchema = new Schema({
    nRetiros: Number,
    numeroCuenta: Number,
    comisionMensual: Number,
    interes: Number,
    saldo: Number,
    sucursal: Number, //ref susucrsal
    idUsuario: Number //ref usuario
},{ versionKey: false }
);

const cuentaVista = mongoose.model('cuentaVista', cuentaVistaSchema);


export default cuentaVista;