import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

const SubMenu = ({item}) => {
    const[subnav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subnav);
  return (
    <>
        <NavLink 
            id='sidebarLink'
            className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "active" :""
            }
            to={item.path}
            onClick={item.subNav && showSubNav}
        >
            <div id='listLink'>
                <a id="icon">{item.icon}</a>
                <a id='title'>{item.title}</a>
            </div>
            <div>
                {
                    item.subNav && subnav
                    ? item.iconClosed
                    : item.subNav
                    ?item.iconOpened
                    :null
                }
            </div>
            </NavLink>
            {
                subnav &&
                    item.subNav.map((item, i) =>{
                        return(
                            <NavLink 
                                id='dropdownLink'
                                className={({isActive, isPending}) =>
                                    isPending ? "pending" : isActive ? "active" :""
                                }
                                to={item.path}
                                key={i}
                            >
                                <a id='icon'>{item.icon}</a>
                                <a id='title'>{item.title}</a>
                            </NavLink>
                        )
                    })
            }

        
    </>
  )
}

export default SubMenu