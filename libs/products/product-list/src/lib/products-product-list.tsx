import styles from './products-product-list.module.css';

/* eslint-disable-next-line */
export interface ProductsProductListProps {}

export function ProductsProductList(props: ProductsProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductsProductList!</h1>
    </div>
  );
}

export default ProductsProductList;
