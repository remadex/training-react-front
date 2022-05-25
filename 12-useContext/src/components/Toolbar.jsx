import SelectBox from './SelectBox';

const Toolbar = () => (
  <div className="flex items-center justify-around w-full py-3">
    <button
      type="button"
      className="px-3 py-2 text-white duration-200 bg-blue-500 rounded hover:bg-blue-300">
      Zoomer
    </button>
    <button
      type="button"
      className="px-3 py-2 text-white duration-200 bg-blue-500 rounded hover:bg-blue-300">
      Dézoomer
    </button>
    <SelectBox />
  </div>
);

export default Toolbar;
