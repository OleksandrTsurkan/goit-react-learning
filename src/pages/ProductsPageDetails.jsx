import { getSingleProduct } from 'api/products';
import Product from 'components/Product';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsPageDetails = () => {
  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setIsLoading(true);
        setSingleProduct(null);
        setError('');
        const data = await getSingleProduct(productId);
        setSingleProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSingleProduct();
  }, [productId]);
  return (
    <>
      {isLoading && 'isLoading...'}
      {error && { error }}
      {singleProduct && <Product product={singleProduct} />}
    </>
  );
};

export default ProductsPageDetails;
