import axios from 'axios'


const url = "http://localhost:8080/api/"
export default class API {
    static async logusuario(data) {
        try {

            const res = await axios.post(url + "logusuario", data)
            return res.data

        } catch (error) {

            return error.response.data

        }
    }
}