import ProductListItem from './ProductListItem';

const ProductList = ({ products, deleteProduct }) => (
  <>
    {products.length === 0 && 'Aucun produit est présent dans la liste'}
    {products.map((p, index) => (
      <ProductListItem
        key={index}
        product={p}
        index={index}
        deleteProduct={deleteProduct}
      />
    ))}
  </>
);

export default ProductList;
