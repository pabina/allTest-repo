import  axios from "axios";

const url='http://localhost:8004';

class apiFunctinality{

    async adduser(data){
        try{
        return await axios.post(`${url}/upload`,data);
        }catch(error){
            console.log(error);     
        }
    }
}
export default apiFunctinality;
