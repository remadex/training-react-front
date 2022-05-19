import React from 'react';
import SubmitButton from './components/SubmitButton';
import User from './components/User';

const App = () => {
  const user = {
    name: 'Sébastien',
    age: 27,
    comment: {
      lastComment: "J'aime boire de la bière surtout le matin avant de donner cours",
    },
  };

  const users = [
    {
      id: 1,
      name: 'Olivia',
      age: 23,
      comment: {
        lastComment: "Je n'aime pas Patrick",
      },
    },
    {
      id: 2,
      name: 'Alex',
      age: 37,
      comment: {
        lastComment: "Je n'aime pas Olivia",
      },
    },
    {
      id: 3,
      name: 'Esteban',
      age: 16,
      comment: {
        lastComment: "Je n'aime pas boire",
      },
    },
  ];

  const handleLaunchRocket = () => {
    let cpt = 10;
    const intervalRocket = setInterval(() => {
      if (cpt <= 0) {
        console.log('Lancement de la fusée');
        clearInterval(intervalRocket);
      } else {
        console.log(cpt);
      }
      cpt -= 1;
    }, 1000);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <header>
        <div>
          <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
              <SubmitButton onHandleClick={handleLaunchRocket} />
              <User name={user.name} age={user.age} bisou={user.comment.lastComment} />

              {users.map((u) => (
                <User
                  key={u.id}
                  name={u.name}
                  age={u.age}
                  bisou={u.comment.lastComment}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
