import React,{useContext, useEffect, useState, useCallback} from "react";
import './style.css'
import { SidebarData } from "./sidebarData";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import axios from "axios";
import Perfil from './perfil.png'

function Sidebar(){
    

    const params = useParams();
    const state = useContext(GlobalState);
    const[user,setUser] = useState([]);
    const[images,setImages] = useState();
    const [token] = state.token

    const getUser = useCallback(async() =>{
        try {
            await axios.get('user/infor',{
                headers: {Authorization: token}
             }).then(response =>{
                return setUser(response.data)
             })
             const blob = new Blob([Int8Array.from(user.picture.data.data)], {type: user.picture.contentType})
             const image =  window.URL.createObjectURL(blob)
             setImages(image)   
             
             
        } catch (error) {
            //alert(error.response.data.message)
            console.log(error)
    
        }
    })
      const timeCount = ""
    useEffect(() =>{
        getUser()
    
    },[user.length])      
        return(
            <div className="sidebar">
                <div className="userInfor">
                    <div className="userPhotodiv">
                        <img id="userPhoto" src={ images === null ? Perfil : images }/>
                    </div>
                    
                    <h2 id="userName">{user.name}</h2>
                    <h3 id="userEmail">{user.email}</h3>
                </div>
                <ul className="sideList">
                    {
                        SidebarData.map((val, i) =>{
                            return(
                                <li 
                                    className="listRow"
                                    id={window.location.pathname == val.path ? "active":""}
                                    key={i} 
                                    onClick={()=>{window.location.pathname = val.path}}
                                   
    
                                >
                                    <div id="icon">{val.icon}</div>
                                    <div id="title">{val.title}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
    export default Sidebar;
    