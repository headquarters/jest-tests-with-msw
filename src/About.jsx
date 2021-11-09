import { useEffect, useState } from 'react';

const About = () => {
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
    { loading ? 'Loading...' : 'About!' }
  </div>;
}

export default About;