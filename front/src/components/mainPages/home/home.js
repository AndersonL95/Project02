import React, { useContext, useState } from 'react';
import './style.css';
import Slide1 from '../../../assets/slide1.jpg';
import Slide2 from '../../../assets/slide2.jpeg';
import Slide3 from '../../../assets/slide3.jpg';
import Slider from 'react-slick';
import NewsNotices from '../dashboard/noticias/newsNotices';
import { GlobalState } from '../../../GlobalState';

var settings = {
    
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll:1,
  swipeToSlide: true,
  centerPadding:'60px',
  autoplay: true,
  speed: 1000

}

export default function Home() {
  const state = useContext(GlobalState);
  const[notices] = state.newsApi.notices;
  const [image,setImages] = useState([
    {image: Slide1}, {image: Slide2}, {image:Slide3}
  ])



  return (
   <div className='home_body'>
      <div className='top_home'>
        <div className='box_home'>
          <h1>
            A Educação Infantil é considerada uma das mais importantes etapas da formação das crianças!
          </h1>
        </div>
        <div className='slide_home'>
            {
              <Slider {...settings}>
                {
                  image.map((img, i) =>{
                    return(
                      <div>
                        <img 
                          src={img.image} 
                          key={i}
                          className='slideArray'
                        />
                      </div>
                    )
                  })
                }
              </Slider>
            }
        </div>
      </div>
      <div className='center_home'>
        <div className='cards_notices'>
          {
            notices == null
            ? ""
            : notices.map((notice) =>{
              return(
                <NewsNotices key={notice._id} notices={notice}/>
              )
            })
          }
        </div>
      </div>
   </div>
  );
}
