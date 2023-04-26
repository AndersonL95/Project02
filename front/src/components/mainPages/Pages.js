import { useContext } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import Login from "./auth/login";
import Home from './home/home';
import Dashboard from "./dashboard/dashboard";
import NotFound from "./home/NotFound";
import Profile from "./dashboard/profile/profile";
import PageLayout from "./dashboard/PageLayout";




import { GlobalState } from "../../GlobalState";
import News from "./noticias/news";
import Alunos from "./alunos/students";


function Pages() {

    const state = useContext(GlobalState);
    const[logged] = state.userApi.logged;
    const[admin] = state.userApi.admin;

    return(
        <>
            {
                logged === true 
                ?<PageLayout>
                    <Routes>
                        <Route path="/dashboard" element={admin ? <Dashboard/> : <NotFound/>}/>
                        <Route path="/profile" element={admin ? <Profile/> : <NotFound/>} />
                        <Route path="/news_main" element={admin ? <News/> : <NotFound/>} />
                        <Route path="/aluno" element={admin ? <Alunos/> : <NotFound/>} />
                    </Routes>
                </PageLayout>
                :<Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route exact path="/" element={<Home />} />
                    
                    <Route path="/dashboard" element={admin ? <Dashboard/> : <NotFound/>}/>
                    <Route path="/profile" element={admin ? <Profile/> : <NotFound/>} />
                    <Route path="/news_main" element={admin ? <News/> : <NotFound/>} />
                    <Route path="/aluno" element={admin ? <Alunos/> : <NotFound/>} />
                 </Routes>
            }
                
        </>
        
        
        
    )
}
export default Pages;