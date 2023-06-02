import  { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "./auth/login";
import Home from './home/home';
import Dashboard from "./dashboard/dashboard";
import NotFound from "./home/NotFound";
import Profile from "./dashboard/profile/profile";
import PageLayout from "./dashboard/PageLayout";
import News from "./dashboard/noticias/news";
import Alunos from "./alunos/students";



import { GlobalState } from "../../GlobalState";
import NewsDetails from "./dashboard/noticias/newsDetails";



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
                        <Route path="/news_main/noticia_detalhes_admin/:id" element={admin ? <NewsDetails/> : <NotFound/>}/>
                           
                        
                        
                    </Routes>
                </PageLayout>
                :<Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route exact path="/" element={<Home />} />
                    
                    <Route path="/dashboard" element={admin ? <Dashboard/> : <NotFound/>}/>
                    <Route path="/profile" element={admin ? <Profile/> : <NotFound/>} />
                    <Route path="/news_main" element={admin ? <News/> : <NotFound/>} />
                    <Route path="/aluno" element={admin ? <Alunos/> : <NotFound/>} />
                    <Route path="/noticia_detalhes_admin/:id" element={admin ? <NewsDetails/> : <NotFound/>}/>
                 </Routes>
            }
                
        </>
        
        
        
    )
}
export default Pages;