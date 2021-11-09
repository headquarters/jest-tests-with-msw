import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`/api/${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        setPost(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <div>
    <h1>{post.title}</h1>
    <p>
      {post.text}
    </p>
  </div>;
}

export default Post;