import { useState } from 'react';

const Form = () => {
  const [{ name, username, password, gender }, setSignup] = useState({
    name: '',
    username: '',
    password: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;

    setSignup((prev) => {
      console.log(prev);
      console.log(val, key);

      const newState = {
        ...prev,
        [key]: val,
      };

      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Le nom est ${name}, le pseudo est ${username}, le mot de passe est goulagwe, et le genre est ${
        gender === 'male' ? 'Homme' : 'Femme'
      }`,
    );
  };

  return (
    <form className="w-1/2 p-8 m-8 max-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="name"
          value={name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="w-1/2 mb-4">
        <label htmlFor="username" className="block font-medium text-gray-700">
          Pseudo
        </label>
        <input
          type="text"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="username"
          value={username}
          onChange={handleChange}
          name="username"
        />
      </div>
      <div className="w-1/2 mb-4">
        <label htmlFor="password" className="block font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="password"
          value={password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <div className="flex justify-start mb-4">
        <label htmlFor="male" className="flex items-center font-medium text-gray-700">
          Homme
          <input
            type="radio"
            className="w-4 h-4 ml-2 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleChange}
            id="male"
          />
        </label>
        <label
          htmlFor="female"
          className="flex items-center font-medium text-gray-700 ml-4">
          Femme
          <input
            type="radio"
            className="w-4 h-4 ml-2 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleChange}
            id="female"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
