import styles from './products-product-detail.module.css';

/* eslint-disable-next-line */
export interface ProductsProductDetailProps {}

export function ProductsProductDetail(props: ProductsProductDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductsProductDetail!</h1>
    </div>
  );
}

export default ProductsProductDetail;
