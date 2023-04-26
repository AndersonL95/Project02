import React,{useContext} from 'react';
import './header.css'
import { GlobalState } from '../../GlobalState';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import Home from '../mainPages/home/home';
import Dashboard from '../mainPages/dashboard/dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeDash from '@mui/icons-material/Dashboard';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Logo from '../../assets/genesis.png';


const Header = () => {

  const state = useContext(GlobalState);
  const [logged] = state.userApi.logged;
  const [admin] = state.userApi.admin;

  const logoutUser = async () =>{
    await axios.get('user/logout')
    localStorage.clear()
    window.location.href = '/'
  }
  
  const logoutRouter = () => {
    return(
      <>
        
        <Link 
          to='/#cadastrar' 
          className='exit_btn'
        >
          <a className='logoutTitle'><h7>Dashboard</h7><HomeDash className='icon'/></a>
        </Link>
        <Link 
          to='/' 
          onClick={logoutUser}
          className='exit_btn'
        >
          <a 
            className='logoutTitle'
          >
            <h7>Sair</h7> <LogoutIcon className='icon'/>
          </a>
        </Link>
      </>
      
    )
  } 

  return(
    <div className='header'>
      <img src={Logo} className='logo'/>
      <div className='header-right'>
        
        {
          logged ? logoutRouter() : 
            <Link
              className='exit_btn'
              to='/login'
            >
              <a  className='logoutTitle'> 
              <h7>{'Login'}</h7>
                <LockOpenIcon className='icon' />
              </a>
          </Link>
        }

      </div>

    </div>
  )
}
export default Header

/**c

  
  */