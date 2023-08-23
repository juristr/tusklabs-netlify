import styles from './orders-order-list.module.css';

/* eslint-disable-next-line */
export interface OrdersOrderListProps {}

import { OrdersOrderDetail } from '@tusklabs/orders/order-detail';
import { OrdersUi } from '@tusklabs/orders/ui';

export function OrdersOrderList(props: OrdersOrderListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrdersOrderList!</h1>
    </div>
  );
}

export default OrdersOrderList;
