import React from 'react';
import SideBar from './sidebar/sidebar';
import './style.css';
import { Grid } from '@mui/material';


const PageLayout = ({children}) =>{
    

    return(
        
        <Grid container className='pageLayout'>
            <Grid item md='2' xs='2'>
                <SideBar/>
            </Grid>
        <Grid item md='10' xs='10'>
            {children}
        </Grid>
        
        </Grid>
        
    )


}
export default PageLayout;