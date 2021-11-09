import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, waitTime);
  }, [waitTime]);

  return <div>
    { loading ? 'Loading...' : 'Home!' }
  </div>;
}

export default Home;