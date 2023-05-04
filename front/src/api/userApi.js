import {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function UserApi(token) {
    const[logged, setLogged] = useState(false);
    const[admin, setAdmin] = useState(false);
    const[userData,setUserData] = useState([]);

    useEffect(() =>{
        if(token) {
            const getUser = async () =>{
                try {
                    const user = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setUserData(user.data);
                    setLogged(true);
                    user.data.cargo ==='admin' ? setAdmin(true) : setAdmin(false);
                } catch (error) {
                    toast.error(error.response.msg);
                }
            }
            getUser();
        }
    }, [token]);
    
    return {
        logged:[logged,setLogged],
        admin:[admin, setAdmin],
        userData:[userData,setUserData]
    }

}
export default UserApi;