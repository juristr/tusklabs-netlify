import styles from './orders-order-detail.module.css';

/* eslint-disable-next-line */
export interface OrdersOrderDetailProps {}
import { OrdersUi } from '@tusklabs/orders/ui';
import { SharedUiComponent } from '@tusklabs/shared/ui-components';

export function OrdersOrderDetail(props: OrdersOrderDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrdersOrderDetail!</h1>
    </div>
  );
}

export default OrdersOrderDetail;
