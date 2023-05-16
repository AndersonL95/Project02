import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NewsItems({notices, admin}) {
  const[images,setImages] = useState(notices.images)
  const [image, setImage] = useState()
  useEffect(() =>{
    const getImages = async () =>{
      
        const blob = new Blob([Int8Array.from(images[0].data[0])],{type: images[0].contentType});
        const image64 = window.URL.createObjectURL(blob);
        setImage(image64);
    }
    getImages();
    
  },[images[0].length]);

  
  return (
    <div className='card'>
      <Link
        className='card_link'
        to={`/noticia_detalhes_admin/${notices._id}`}
      >
        <img src={`data:image/png;base64,${images[0].data[0]}`} className='cover' />
        <div className='card_notice'>
          <h2 title={notices.titulo}>{notices.titulo}</h2>
        </div>
        <div className='news_id'>
          <p>{notices.news_id}</p>
        </div>
      </Link>
                      
     
    </div>
  )
}

export default NewsItems