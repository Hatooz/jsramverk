import axios from 'axios';

const url = 'http://localhost:1337/'

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

}
export default infoService;
