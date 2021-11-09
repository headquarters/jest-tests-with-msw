import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const waitTime = Math.random() * 900;

  setTimeout(() => {
    setLoading(false);
  }, waitTime);

  return <div>
    { loading ? 'Loading...' : 'Contact!' }
  </div>;
}

export default Contact;