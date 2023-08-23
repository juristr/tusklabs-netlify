import styles from './products-product-list.module.css';

/* eslint-disable-next-line */
export interface ProductsProductListProps {}

import { ProductsProductDetail } from '@tusklabs/products/product-detail';
import { ProductsUi } from '@tusklabs/products/ui';

export function ProductsProductList(props: ProductsProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductsProductList!</h1>
    </div>
  );
}

export default ProductsProductList;
