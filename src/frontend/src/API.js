import axios from 'axios'

const url = "https://tsunamibank-backend.onrender.com/api"

export default class API {

    //LLAMADAS USUARIO
    static async addUsuario(data) {
        try {
            const res = await axios.post(url + "addUsuario", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getNumeroUsuarios() {
        try {
            const res = await axios.get(url + "getNumeroUsuarios")
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