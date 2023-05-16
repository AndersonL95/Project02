import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import NewsIcon from '@mui/icons-material/NewReleases';
import {GlobalState} from '../../../../GlobalState';
import NewsItems from './newsItems';

function News() {
  const state = useContext(GlobalState);
  const[notices,setNotices] = state.newsApi.notices;
  const[admin] = state.userApi.admin;
  const[token] = state.token;
  
  return (
    <div className='news_body'>
      <div className='card_title'>
          <div className='card_icon'>
            <NewsIcon />
          </div>
            <a>Noticias</a>
        </div>
        <div
          
          className='notices'>
              {
                notices.map(notice =>{
                  return <NewsItems key={notice._id} notices={notice} token={token}/>
                     
                })
              }
          </div>
    </div>
  )
}

export default News