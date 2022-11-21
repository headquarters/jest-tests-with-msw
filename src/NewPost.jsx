import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewPost = () => {
  const [post, setPost] = useState(null)

  // useEffect(() => {
  //   fetch(`/api/${id}`)
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       setPost(result);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, [id]);

  return <div>
    <h1>Create New Post</h1>
    <form>
      Title <input type="text" />
      Text <input type="text" />
    </form>
  </div>;
}

export default NewPost;