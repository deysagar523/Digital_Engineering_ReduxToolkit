import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/PostRedux";

const PostComp = () => {
  const posts = useSelector((state) => state.postsArr.posts);
  const dispatch = useDispatch();
  //   console.log(stateVal);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <div>PostComp</div>
      <ul>
        {posts.length > 0 ? posts.map((post) => <li>{post.title}</li>) : []}
      </ul>
    </>
  );
};

export default PostComp;
