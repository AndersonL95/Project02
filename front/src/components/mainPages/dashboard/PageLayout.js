import React from 'react';
import SideBar from './sidebar/sidebar';
import './style.css';
import { Grid } from '@mui/material';


const PageLayout = ({children}) =>{
    

    return(
        
        <Grid container className='pageLayout'>
            <Grid item lg={2} md={3} sm={3} xs={2}>
                <SideBar/>
            </Grid>
        <Grid item lg={10} md={9} sm={9} xs={10}>
            {children}
        </Grid>
        
        </Grid>
        
    )


}
export default PageLayout;