import React from 'react';
import SideBar from './sidebar/sidebar';
import './style.css';
import { Grid } from '@mui/material';


const PageLayout = ({children}) =>{
    

    return(
        
        <Grid container>
        <Grid item md='4'>
            <SideBar/>
        </Grid>
        <Grid item md='8'>
            {children}
        </Grid>
        
        </Grid>
        
    )


}
export default PageLayout;