const ProductListItem = ({ product, index, deleteProduct }) => (
  <div className="flex items-center justify-between rounded-md px-4 py-2 bg-red-100 mb-2">
    <div className="flex items-center justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {product}
    </div>
    <button type="button" onClick={() => deleteProduct(index)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
);

export default ProductListItem;
