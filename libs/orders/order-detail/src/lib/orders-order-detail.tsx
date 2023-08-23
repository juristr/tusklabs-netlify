import styles from './orders-order-detail.module.css';

/* eslint-disable-next-line */
export interface OrdersOrderDetailProps {}

export function OrdersOrderDetail(props: OrdersOrderDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrdersOrderDetail!</h1>
    </div>
  );
}

export default OrdersOrderDetail;
