import React from "react";
import Home from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person';
import News from '@mui/icons-material/NewReleases';
import AddUser from '@mui/icons-material/Person3';
import NoteAdd from'@mui/icons-material/NoteAdd';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';





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
        title:"Usuarios",
        path: "/usuarios",
        icon: <FormatListBulletedIcon/>,
        iconClosed:<ArrowDropUpIcon/>,
        iconOpened: <ArrowDropDownIcon/>,
        subNav: [
            {
                title:"Criar usuarios",
                path:"/",
                icon:<AddIcon/>
            }
        ]
    },
    {
        title:"Noticias",
        path: "/news_main",
        icon: <News/>,
        iconClosed:<ArrowDropUpIcon/>,
        iconOpened: <ArrowDropDownIcon/>,
        subNav: [
            {
                title:"Criar noticia",
                path:"/",
                icon:<NoteAdd/>
            }
        ]
    },
    {
        title:"Aluno",
        path: "/aluno",
        icon: <AddUser/>
    },
    
    
]
