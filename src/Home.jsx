import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  setTimeout(() => {
    setLoading(false);
  }, waitTime);

  return <div>
    { loading ? 'Loading...' : 'Home!' }
  </div>;
}

export default Home;