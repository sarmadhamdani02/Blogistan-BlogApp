import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
    
      return () => {
        
      }
    }, [slug, navigate])
    

  return (
    <div>EditPost</div>
  )
}

export default EditPost