const App = () => {
  const myClass = "bg-red-500";
  return React.createElement("div", {}, [
    React.createElement("h1", { className: myClass }, "Hello world"),
    React.createElement("h2", {}, "Seb c'est bien"),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
