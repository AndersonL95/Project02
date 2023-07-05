import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';
import Moment from 'react-moment';
import ModalImage from 'react-modal-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

function NewsDetailsCommom() {
const params = useParams();
  const state = useContext(GlobalState);
  const[token] = state.token
  const[notices] = state.newsApi.notices;
  const[newsDetails,setNewsDetails] = useState([]);
  const[images,setImages] = useState([])
  const[modal,setModal] = useState(null)
  const[currentImg,setCurrentImg] = useState(null)

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#777" }}
        onClick={onClick}
      />
    );
  }
  

  var settings = {
    
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll:5,
    swipeToSlide: true,
    centerPadding:'60px',
    nextArrow:<Arrow/>,
    prevArrow:<Arrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          nextArrow:<Arrow/>,
          prevArrow:<Arrow/>,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    useEffect(() =>{
        if(params.id) {
            notices.forEach(notice =>{
                if(notice._id === params.id) setNewsDetails(notice)
                
            })
        }
    },[notices, params.id])

    useEffect(()=>{
        function getImages(){
          setImages(newsDetails.images)
  
        }
        getImages()
      },[newsDetails.images])

      const handleClick = (img, i) => {
        setCurrentImg(i);
        setModal(img);
      }

  return (
    <div className='commom_body'>
        <div className='contents_news'>
            <div className='news_title'>
                <h1>{newsDetails.titulo}</h1>
                <div className='date_news'>
                    <Moment format='DD/MM/YYYY'>
                        {newsDetails.createdAt}
                    </Moment>
                </div>
            </div>
            <div className='news_content'>
                <p>{newsDetails.conteudo}</p>
            </div>
            <div className='news_image'>
                {
                    images == null
                    ? ""
                    :<Carousel>
                    {
                      images.map(image => {
                        return image.data.map((img, i)=>{
                          //console.log(`IMAGES:${i}, ${img}`)
                          return (
                            <div className="slide"key={i}>
                              <img
                                src={`data:image/png;base64,${img}`}
                                alt="images"
                                className='imgArrs'
                              />
                            </div>
                              

                        
  
                          )})
                      })
                    }
                </Carousel>
                }

            </div>
        </div>

    </div>
  )
}

export default NewsDetailsCommom
/**<div className='news_image'>
                {
                    images == null
                    ? ""
                    :<Slider {...settings}>
                    {
                      images.map(image => {
                        return image.data.map((img, i)=>{
                          //console.log(`IMAGES:${i}, ${img}`)
                          return (
                            <div>
                                <ModalImage
                                    small={`data:image/png;base64,${img}`}
                                    large={`data:image/png;base64,${img}`}
                                    alt="images"
                                    className='imgArrs'
                                />
                            </div>
                              

                        
  
                          )})
                      })
                    }
                </Slider>
                }

            </div> */