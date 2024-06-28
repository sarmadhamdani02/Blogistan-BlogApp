import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }

  }, [slug, navigate]);

  return post ? ( // FIXME: This layout is done by AI so check this out if there is some error  
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-1/4">
            <PostForm post={post} />
          </div>
        </div>
      </Container>
    </div>
  ) : null
};

export default EditPost;
