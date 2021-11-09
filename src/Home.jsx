import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, waitTime);

    return function cleanup() {
      clearTimeout(timeout);
    }
  }, [waitTime]);

  return <div>
    { loading ? 'Loading...' : 'Home!' }
  </div>;
}

export default Home;