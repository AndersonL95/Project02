import {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function UserApi(token) {
    const[logged, setLogged] = useState(false);
    const[admin, setAdmin] = useState(false);
    const[userData, setUserData] = useState([]);

    useEffect(() =>{
        if(token) {
            const getUser = async () =>{
                try {
                    const user = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setLogged(true);
                    user.data.cargo ==='admin' ? setAdmin(true) : setAdmin(false);
                } catch (error) {
                    toast.error(error.response.message);
                }
            }
            getUser();
        }
    }, [token]);

    return {
        userData:[userData,setUserData],
        logged:[logged,setLogged],
        admin:[admin, setAdmin]

    }

}
export default UserApi;