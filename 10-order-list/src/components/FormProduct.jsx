const FormProduct = ({ product, setProduct, handleSubmit, error }) => (
  <form className="w-1/2 p-8 m-8 max-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="product" className="block font-medium text-gray-700">
        Ajouter un produit à la liste de course
      </label>
      <input
        type="text"
        className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        id="product"
        name="product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
    </div>
    <div className="py-0.5 text-sm text-red-500">{error}</div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
        Ajouter
      </button>
    </div>
  </form>
);

export default FormProduct;
