import { useState } from 'react';

const ClickButton = () => {
  // Règle numéro 1: On ne mettra jamais un hook dans une condition
  /**
   * if(machin) {
   *  const [count, setCount] = useState(0);
   * } ===> A BANNIR
   */
  // Règle numéro 2: Les hooks seront déclarés tout en haut du component. L'ordre des hooks est important (dans certains cas)
  const [count, setCount] = useState(0);

  const decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <button
      type="button"
      className="p-4 rounded m-4 text-white bg-blue-500"
      onClick={() => setCount(count + 1)}
      onContextMenu={(e) => decrement(e)}>
      {count}
    </button>
  );
};

export default ClickButton;
