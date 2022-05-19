const SubmitButton = ({ onHandleClick }) => (
  <button
    type="button"
    onClick={onHandleClick}
    className="px-4 py-1.5 bg-cyan-300 duration-200 hover:bg-cyan-600">
    Launch the rocket
  </button>
);

export default SubmitButton;
