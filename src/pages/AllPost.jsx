import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

const AllPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);

  appwriteService.getPost([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });

  <div className="w-full py-8">
    <Container>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  </div>;
};

export default AllPost;
