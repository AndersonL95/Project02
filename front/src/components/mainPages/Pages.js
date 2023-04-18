import { useContext } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import Login from "./auth/login";
import Home from './home/home';

import { GlobalState } from "../../GlobalState";

function Pages() {
    const state = useContext(GlobalState);
    const[logged] = state.userApi.logged;
    const[admin] = state.userApi.admin;
    const location = useLocation();
    

    return(
        <Routes location={location}>
            <Route exact path="/" element={<Home key='home' />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}
export default Pages;