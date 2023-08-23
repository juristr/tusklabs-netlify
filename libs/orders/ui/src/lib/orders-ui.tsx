import styles from './orders-ui.module.css';

/* eslint-disable-next-line */
export interface OrdersUiProps {}

import { SharedUiComponents } from '@tusklabs/shared/ui-components';

export function OrdersUi(props: OrdersUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrdersUi!</h1>
    </div>
  );
}

export default OrdersUi;
