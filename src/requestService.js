import axios from 'axios';

// const url = 'http://localhost:1337/'
const url = 'https://me-api.elbizza.me/'

class infoService {
    static async getInfo() {        
            try {
                const res =  await axios.get(url);
                const data = await res.data;
                
                return data;
            } catch (error) {
                console.log(error.message)
            }        
    }

    static async registerUser(email, password) {
        return axios.post(`${url}register`, {
            email,
            password
        }).then(response => {
            console.log(response)
            return response.status
        })
    }
    static async loginUser(email, password) {
        return axios.post(`${url}login`, {
            email,
            password
        }).then(response => {
            localStorage.setItem('token', response.data.token)
            return response.status
        })
    }
    static async getWeekInfo(weekNumber) {
        const access_token = localStorage.getItem('token')
        try {
            const res =  await axios.get(`${url}reports/week/${weekNumber}`, {
                headers: {
                  'x-access-token': `${access_token}`
                }
            });
            const data = await res.data;
            
            return data;
        } catch (error) {
            console.log(error.message)
        }    
    }
    static async postRedovisning(kmom, redovisning) {
        const access_token = localStorage.getItem('token')
        return axios.post(`${url}reports`, {
            kmom,
            redovisning
        }, {
            headers: {
                'x-access-token': `${access_token}`
              }
        }).then(response => {
            return response.data
        }) 
    }
    static async editRedovisning(kmom, redovisning) {
        const access_token = localStorage.getItem('token')
        return axios.put(`${url}reports`, {
            kmom,
            redovisning
        }, {
            headers: {
                'x-access-token': `${access_token}`
              }
        }).then(response => {
            return response.data
        }) 
    }

}
export default infoService;
