import ProductListItem from './ProductListItem';

const ProductList = ({ products, deleteProduct }) => (
  <>
    {products.length === 0 && 'Aucun produit est présent dans la liste'}
    {products.map((p) => (
      <ProductListItem key={p.id} product={p} deleteProduct={deleteProduct} />
    ))}
  </>
);

export default ProductList;
