import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';
import axios from 'axios';
import Delete from '@mui/icons-material/Delete';
import Update from '@mui/icons-material/SystemUpdateAlt';
import Image from '@mui/icons-material/Image';

function NewsDetails() {
  const params = useParams();
  const state = useContext(GlobalState);
  const[token] = state.token
  const[notices,setNotices] = state.newsApi.notices;
  const[newsDetails,setNewsDetails] = useState([]);
  const[newImage,setNewImage] = useState()
  const[images,setImages] = useState()

  const showImage = async (e,i) =>{
    setImages(e.target.files[i]);
    setNewImage(e.target.files[i]);
    console.log(images)
  }
    
    useEffect(() =>{
        if(params.id) {
            notices.forEach(notice =>{
                if(notice._id === params.id) setNewsDetails(notice)
                
            })
        }
    },[])

    useEffect(()=>{
      function getImages(){
        setImages(newsDetails.images)
      }
      getImages()
    },[newsDetails.length])



    const deleteNews = async () =>{
      try {
        await axios.delete(`news/noticias/${newsDetails._id}`,{
          headers:{Authorization: token}
        })
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div className='newsDetails_body'>
      <div className='cardBody_notice'>
        <div className='newsTitle'>
          <input
            type='text'
            value={newsDetails.titulo}
            name='titulo'
          />
        </div>
        <div className='newsContent'>
          <input 
            type='text' 
            value={newsDetails.conteudo}
            name='conteudo'
          />
        </div>
        <div className='card_footer'>
        <div className='newsPictures'>
          {
             images == null 
             ? "" 
             : images.map(image => {
                return image.data.map((img, i)=>{
                  //console.log(`IMAGES:${i}, ${img}`)
                  return (
                    <div>
                      <img 
                        src={`data:image/png;base64,${img}`} 
                        key={i} 
                        className='imgArr'
                      />
                    </div>
                    
                  )})
              })
          }
        </div>
        <label htmlFor='images' placeholder='upload images'>
          <input
            type='file'
            id="images"
            name="images"
            
            onChange={showImage}
            hidden
          />
            <Image
              className='uploadIcons'
            />
        </label>
      </div>
        
        <div className='footer'>
          <button 
            onClick={deleteNews}
            className='delIcon' >
          <Delete />
          </button>
          <button 
            onClick={deleteNews}
            className='updateIcon' >
          <Update />
          </button>
        </div>
      </div>
       </div>
    
  )
}

export default NewsDetails