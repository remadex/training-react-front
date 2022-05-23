import { Component } from 'react';

class Counter extends Component {
  render() {
    const { count, onUpdate } = this.props;
    return (
      <div className="flex justify-center p-4">
        <button
          type="button"
          className="p-4 rounded mr-4 text-white bg-red-500 disabled:bg-red-200"
          disabled={count <= 0}
          onClick={() => onUpdate(-1)}>
          -1
        </button>
        <button
          type="button"
          className="p-4 rounded mr-4 text-white bg-green-500"
          onClick={() => onUpdate(1)}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
