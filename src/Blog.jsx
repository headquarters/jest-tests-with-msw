import { useState } from 'react';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  setTimeout(() => {
    setLoading(false);
  }, waitTime);

  return <div>
    { loading ? 'Loading...' : 'Blog!' }
  </div>;
}

export default Blog;