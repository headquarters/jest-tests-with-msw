import { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [posts]);


  return <div>
    Blog
  </div>;
}

export default Blog;