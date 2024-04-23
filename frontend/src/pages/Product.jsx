import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  let product = all_products.find((e)=> e.id === Number(productId))

  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts />
    </>
  );
};

export default Product;