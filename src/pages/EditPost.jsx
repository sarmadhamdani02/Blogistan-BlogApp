import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (slug) {
          const fetchedPost = await appwriteService.getPost(slug);
          if (fetchedPost) {
            setPost(fetchedPost);
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 md:w-1/2">
            <PostForm post={post} />
          </div>
        </div>
      </Container>
    </div>
  ) : null;
};

export default EditPost;
