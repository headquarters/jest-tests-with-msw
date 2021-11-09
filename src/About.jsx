import { useState } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  setTimeout(() => {
    setLoading(false);
  }, waitTime);

  return <div>
    { loading ? 'Loading...' : 'About!' }
  </div>;
}

export default About;