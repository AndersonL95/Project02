import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';
import axios from 'axios';
import Delete from '@mui/icons-material/Delete';
import Update from '@mui/icons-material/SystemUpdateAlt';
import Image from '@mui/icons-material/Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function NewsDetails() {
  const params = useParams();
  const state = useContext(GlobalState);
  const[token] = state.token
  const[notices] = state.newsApi.notices;
  const[newsDetails,setNewsDetails] = useState([]);
  const[newImage,setNewImage] = useState([])
  const[images,setImages] = useState([])
  const [Data, setData] = useState({
    titulo:newsDetails.titulo, conteudo: newsDetails.conteudo
  });

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


  const showImage = async (e) =>{
    /*for(let i = 0; i < e.target.files.length; i++){
    }*/
    if(e.target.files){
      setNewImage(e.target.files)
    }
  }
    
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
        setData({titulo:newsDetails.titulo, conteudo: newsDetails.conteudo})

      }
      getImages()
    },[newsDetails.titulo, newsDetails.conteudo])

    //console.log(images)

    
    const handleInputs = e =>{
      const {name, value} = e.target
      setData({...Data, [name]: value})
      
    };
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData();
      for(let i = 0; i < newImage.length; i++){
        formData.append('images', newImage[i])
        console.log(newImage[i])
      }
      formData.append('titulo',Data.titulo)
      formData.append('conteudo',Data.conteudo)
      try{
       await axios.put(`/news/noticias/${newsDetails._id}`,formData,{
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data'
          },
        })
        
        window.location.reload(true)
        console.log(Data)
      }catch(error) {
        console.log(error);
        alert("É necessário alterar a imagem.")
      }
    }
    const deleteNotice = async () =>{
      try {
        const res = await axios.delete(`/news/noticias/${newsDetails._id}`,{
          headers: {Authorization: token}
        })
        alert(res.data.message)
        window.location.href = '/dashboard'

      }
      catch(error) {
        alert(error.response.data.message)
      }
    }
  //console.log(Data)
  return (
    <div className='newsDetails_body'>
      <div
        className='cardBody_notice'
        onSubmit={handleSubmit}
        encType='multipart/form-data' method='put'
      >
        <form className='form_body'>
        <div className='newsTitle'>
          <input
            type='text'
            value={Data.titulo}
            name='titulo'
            id='titulo'
            onChange={handleInputs}
          />
        </div>
        <div className='newsContent'>
          <input 
            type='text' 
            value={Data.conteudo}
            name='conteudo'
            id='conteudo'
            onChange={handleInputs}
          />
        </div>
        <div className='card_footer'>
          <div className='newsPictures'>
            {
              newImage.length == 0
              ?  images == null 
              ? "" 
              :
              <Slider {...settings}>
                  {
                    images.map(image => {
                      return image.data.map((img, i)=>{
                        //console.log(`IMAGES:${i}, ${img}`)
                        return (
                          <div className='sliderImg'>
                            <img 
                              alt='images'
                              src={`data:image/png;base64,${img}`} 
                              key={i} 
                              className='imgArr'
                            />

                          </div>

                        )})
                    })
                  }
              </Slider>

               : 
               <Slider {...settings}>
                {
                  Array.from(newImage).map((file,i) =>{
                    const img64 = URL.createObjectURL(file)
                    //console.log(`Nº ${i} IMAGE: ${img64}`)
                    return (
                      <div className=''>
                          <img 
                            alt='images'
                            src={img64} 
                            key={i} 
                            className='imgArr'/>
                      </div>
                    )

                   }) 

                }
               </Slider>

              
            }
          </div>
        </div>
        <div className='footer'>
          <div className='upload_content'>
            <label htmlFor='images' placeholder='upload images'>
              <input
                type='file'
                id="images"
                name="images"
                multiple
                onChange={showImage}
                hidden
              />
                <Image
                  className='uploadIcons'
            />
           </label>
          </div>
          <a 
            className='delIcon' 
            onClick={deleteNotice}
          >
            <Delete/>
          </a>
          <button 
            type='submit'
            className='updateIcon' 
          >
            <Update />
          </button>
        </div>
        </form>
      </div>
       </div>
    
  )
}

export default NewsDetails