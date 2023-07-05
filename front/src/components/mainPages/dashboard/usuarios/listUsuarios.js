import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { GlobalState } from '../../../../GlobalState';
import axios from 'axios';


function ListUsuarios() {

    const state = useContext(GlobalState);
    const[user] = state.userApi.userData;
    const[token] = state.token;
    const [data,setData] = useState([])

    useEffect(() =>{
        async function getData(){
            try {
                const user = await axios.get('user/infor',{
                    headers: {Authorization: token}
                })
                    setData(user.data)
                    console.log(data)
                  }catch (error) {
                    alert(error.response.data.message)
                  }
        }
        getData()
    },[])
    
  return (
    <div className='userBody'>
        <div className='user_cardBody '>
            
        </div>
    </div>
  )
}

export default ListUsuarios