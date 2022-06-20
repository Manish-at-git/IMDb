import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Blogs = () => {
  const { id } = useParams();

  const [post, SetPost] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        SetPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <>
      {console.log(post)}
      <h1>{post.name}</h1>
    </>
  );
};

export default Blogs;
