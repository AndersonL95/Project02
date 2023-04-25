import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import Link2 from '@mui/material/Link';
import AppBar from '../componentAssets/appBar';
import Toolbar from '../componentAssets/toolBar';
import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom';
import axios from 'axios';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export default function NavBar() {

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
      <li><Link to='/' onClick={logoutUser}> Sair</Link></li>
    )
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link2
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'onepirate'}
          </Link2>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {
              logged ? logoutRouter() : 
              <Link2
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {'Login'}
            </Link2>
            }
            <Link2
              variant="h6"
              underline="none"
              href="/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link2>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

