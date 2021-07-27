import axios from 'axios'
import { baseUrl } from '../constants/urls'

class API {

    errorCase(error) {
        let tempMessage = ''
        if (error.response && error.response.data && error.response.data.message) {
            tempMessage = error.response.data
        }
        else {
            tempMessage = error.message
        }
        throw tempMessage
    }

    async get(url, config) {
        try {
            const { data } = await axios.get(url, config)
            return data
        }
        catch (e) {
            this.errorCase(e)
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getList() {
        return this.get(`${baseUrl}/posts?_start=0&_limit=25`)
    }

}

export const api = new API()
