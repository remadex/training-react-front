import { useEffect, useState } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzI2NjkzNTc0ODY5NjQ3MzYxIiwibGltaXQiOjEwMCwia2V5IjoicEpXZEJtTU1uT3ZvNGFFOGFrZFdqMkVQU3dxZW5ycmtJUHJaUU5EeE1ORHhUclEySUciLCJjcmVhdGVkX2F0IjoiMjAyMi0wMy0yNFQxMzozMjoyOSswMDowMCIsImlhdCI6MTY0ODEyODc0OX0.mZkzOrX78rH4nEmE2u_ml2EdtD5i7_1fwmHf9bKyGfI';

  const getData = async () => {
    const res = await fetch('https://www.blagues-api.fr/api/random', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await res.json();
    setJoke(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const reloadJoke = () => {
    getData();
  };

  return (
    <div>
      <h1 className="text-3xl my-2 text-center">{joke.joke}</h1>
      <h2 className="py-1 text-center text-xl bg-black hover:bg-transparent">
        {joke.answer}
      </h2>
      <button
        type="button"
        className="mt-8 px-4 py-2 text-white bg-indigo-600"
        onClick={reloadJoke}>
        Une nouvelle blague ?
      </button>
    </div>
  );
};

export default Jokes;
