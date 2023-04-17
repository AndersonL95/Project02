import axios from 'axios';
import { SET_LOADER, CLOSE_LOADER, REGISTER_ERRORS, SET_TOKEN} from '../types/UserTypes';

export const register = (state) =>{
    return async(dispatch) => {
        const config ={
            headers: {
                "Content-Type": "application/json",
            }
        };
        dispatch({type: SET_LOADER});
        try {
            const {data} = await axios.post('/user/registro', state, config);
            dispatch({type: CLOSE_LOADER});
            localStorage.setItem('TokenAccess', data.token);
            dispatch({type: SET_TOKEN, payload: data.token});
        } catch (error) {
            dispatch({type: REGISTER_ERRORS, payload: error.response.data.errors})
            console.log(error.response)
        }
    }
}
