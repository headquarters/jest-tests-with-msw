import { useState, useEffect } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, waitTime);
  }, [waitTime]);

  return <div>
    { loading ? 'Loading...' : 'Contact!' }
  </div>;
}

export default Contact;