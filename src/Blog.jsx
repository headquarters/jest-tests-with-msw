import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(
      (result) => {
        setPosts(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <div>
    <ul>
      {posts.map(post => {
        return (<li key={post.id}>
          <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
        </li>);
      })}
    </ul>
  </div>;
}

export default Blog;