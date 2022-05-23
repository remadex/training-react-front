import { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
    day: 'Mardi',
  };

  day = 'Jeudi';

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  updateDay = () => {
    this.setState({
      day: 'Lundi',
    });
    this.day = 'Vendredi';
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1 className="m-8 text-4xl font-bold text-center">
          Bonjour tout le monde, on est le {this.state.day} et on n'est pas le {this.day}
        </h1>
        <h2 className="text-center">
          Il est {this.state.date.toLocaleTimeString()} sur React Radio DAB+
        </h2>
        <button
          type="button"
          className="px-4 py-2 rounded bg-indigo-600 text-white duration-200 hover:bg-indigo-800 block mx-auto mt-4"
          onClick={this.updateDay}>
          Update the day
        </button>
      </div>
    );
  }
}

export default Clock;
