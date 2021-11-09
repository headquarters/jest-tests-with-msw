import { useEffect, useState } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, waitTime);
  }, [waitTime]);

  return <div>
    { loading ? 'Loading...' : 'About!' }
  </div>;
}

export default About;