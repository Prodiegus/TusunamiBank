import axios from 'axios'

const url = "http://localhost:8080/api/"

export default class API {

    //LLAMADAS USUARIO
    static async addUsuario(data) {
        try {
            const res = await axios.post(url + "addUsuario", {
                "nombre": "Omar",
                "correo": "omairizi@correo.cl",
                "contrasena": "trollo",
                "direccion": "por ahi"
            })

            console.log(res.data);
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    
    static async logusuario(data) {
        try {

            const res = await axios.post(url + "logusuario", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }

}