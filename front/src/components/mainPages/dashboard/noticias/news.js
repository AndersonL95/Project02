import { useContext} from 'react';
import './style.css';
import NewsIcon from '@mui/icons-material/NewReleases';
import {GlobalState} from '../../../../GlobalState';
import NewsItems from './newsItems';

function News() {
  const state = useContext(GlobalState);
  const[notices] = state.newsApi.notices;
  
  return (
    <div className='news_body'>
      <div className='card_title'>
          <div className='card_icon'>
            <NewsIcon />
          </div>
            <p>Noticias</p>
        </div>
        <div
          
          className='notices'>
              {
                notices.map(notice =>{
                  return <NewsItems key={notice._id} notices={notice} />
                     
                })
              }
          </div>
    </div>
  )
}

export default News