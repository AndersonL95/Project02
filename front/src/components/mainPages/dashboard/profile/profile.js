import { useContext, useEffect, useState } from 'react';
import './style.css';
import { GlobalState } from '../../../../GlobalState';
import Perfil from '../../../../assets/perfil.png';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import axios from 'axios';

function Profile() {

  const state = useContext(GlobalState);
  const[user] = state.userApi.userData;
  const[token] = state.token;
  const[image,setImage] = useState(user.picture);
  const[newImage, setNewImage] = useState([])
  const [Data, setData] = useState({
    name:user.name,
  });
 
  
  useEffect(() =>{
    const getImages = async () =>{
    const blob = new Blob([Int8Array.from(image.data.data)],{type: image.contentType});
    const image64 = window.URL.createObjectURL(blob);
   
    setImage(image64);
    }
    getImages();
    
  },[token]);

  const showImage = async (e) =>{
  setImage(URL.createObjectURL(e.target.files[0]));
  setNewImage(e.target.files[0]);
  //console.log(newImage)
  console.log(image)

  
  };

  const handleInputs = e =>{
    const {name, value} = e.target
    setData({...Data, [name]: value})
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('user', newImage)
    formData.append('name',Data.name)
    try{
      await axios.put(`user/edit/${user._id}`,formData,{
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data'
        },
      })
      window.location.reload(true)
    }catch(error) {
      console.log(error);
      alert("É necessário alterar a imagem.")
    }
  }

  return (
    
    
    <div className='profile_body'>
      <div className='card_profile'>
        <form className="userForm" onSubmit={handleSubmit} encType='multipart/form-data' method='put'>
          <img 
            id="userPhoto2" 
            src={
              image !== null
              ? image 
              : Perfil 
            }
            alt='userPhoto'
          />
          <div className='btn_upload'>
            <label htmlFor='user'>
              <input
                type='file'
                id="user"
                name="user"
                onChange={showImage}
                hidden
              
              />
                <AddAPhoto
                
                  className='uploadIcon'
                  
                />
            </label>
          </div>
          <div className='userName'>
            <label>
              Nome
            </label> 
            <input 
              type='text'
              name='name'
              id='name'
              value={Data.name}
              onChange={handleInputs}
            /> 
          </div>
          <button 
            className='edit_btn'
            type='submit'
          >
            Editar
          </button>
        
        </form>
      </div>
    </div>
  )
}

export default Profile