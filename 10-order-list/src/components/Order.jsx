import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormProduct from './FormProduct';
import ProductList from './ProductList';

const Order = () => {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (product.length < 3) {
      setError('Le produit doit contenir au minimum 3 caractères');
      return;
    }

    if (
      productList.map((p) => p.name.toLowerCase()).indexOf(product.toLowerCase()) >= 0
    ) {
      setError('Le produit existe déjà dans la liste');
      return;
    }

    const newProductList = [
      ...productList,
      {
        id: uuidv4(),
        name: product,
      },
    ];
    setProductList(newProductList);
    setProduct('');
  };

  const deleteProduct = (id) => {
    const newArrayOfProducts = productList.filter((p) => p.id !== id);

    // const newArrayOfProducts = [...productList];
    // newArrayOfProducts.splice(index, 1);

    setProductList(newArrayOfProducts);
  };

  return (
    <div className="w-3/4 mx-auto pb-8">
      <FormProduct
        product={product}
        setProduct={setProduct}
        handleSubmit={handleSubmit}
        error={error}
      />
      <ProductList products={productList} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Order;
