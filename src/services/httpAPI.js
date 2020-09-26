import axios from 'axios'

export const ovitrapAPI = axios.create({
    baseURL: 'https://prhwuofqm2.execute-api.us-east-1.amazonaws.com/dev'
})