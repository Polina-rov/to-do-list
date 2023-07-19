import { useState } from 'react';
function Button({ initialValue }) {
  const [likes, setLikes] = useState(initialValue);
  function handleClick() {
    setLikes(likes + 1);
  }
  return <button onClick={handleClick}>Like({likes})</button>;
}
export default Button;
