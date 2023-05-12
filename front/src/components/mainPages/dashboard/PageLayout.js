import React from 'react';
import SideBar from './sidebar/sidebar';
import './style.css';
import { Grid } from '@mui/material';


const PageLayout = ({children}) =>{
    

    return(
        
        <Grid container className='pageLayout'>
            <Grid item lg={2} md={3} sm={4} xs={3}>
                <SideBar/>
            </Grid>
        <Grid item md={9} sm={5} xs={7}>
            {children}
        </Grid>
        
        </Grid>
        
    )


}
export default PageLayout;