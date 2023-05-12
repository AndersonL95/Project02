import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NewsApi() {
    const[notices,setNotices] = useState([]);

    useEffect(() =>{
        const getNotices = async () =>{
            const res = await axios.get(`/news/noticias`)
            setNotices(res.data)
        }
        getNotices()
    },[])
  return {
    notices:[notices, setNotices],
  }
    
  
}

export default NewsApi