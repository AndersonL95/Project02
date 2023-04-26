import React from "react";
import Home from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person';
import News from '@mui/icons-material/NewReleases';
import AddUser from '@mui/icons-material/Person3';




export const SidebarData = [
    {
        title:"Home",
        path: "/dashboard",
        icon: <Home/>
    },
    {
        title:"Meu usuario",
        path: "/profile",
        icon: <Person/>
    },
    {
        title:"Noticias",
        path: "/news_main",
        icon: <News/>
    },
    {
        title:"Aluno",
        path: "/aluno",
        icon: <AddUser/>
    },
    
]
