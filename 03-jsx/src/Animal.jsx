const Animal = () => {
  const who = 'dog';
  return (
    <div className="m-8">
      {who === 'cat' && "C'est un chat"}
      {who === 'dog' && "C'est un go"}
    </div>
  );
};

export default Animal;
