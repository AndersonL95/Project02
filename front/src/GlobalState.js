import {createContext, useState, useEffect} from 'react';
import UserApi from './api/userApi';
import NewsApi from './api/NewsApi';
import axios from 'axios';

export const GlobalState = createContext();

export const DataProvider = ({children}) =>{
    const[token,setToken] = useState(false);

    useEffect(() =>{
        const AccessToken = localStorage.getItem('AccessToken');
        if(AccessToken){
            const refreshToken = async () =>{
                const refresh = await axios.get('/user/refresh_token');
                setToken(refresh.data.projectToken)
                setTimeout(() =>{
                    refreshToken()
                },
                    10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])
    const state = {
        token: [token, setToken],
        userApi: UserApi(token),
        newsApi: NewsApi(),
        
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}