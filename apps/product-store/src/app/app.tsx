// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { ProductsProductList } from '@tusklabs/products/product-list';
import { OrdersOrderList } from '@tusklabs/orders/order-list';
import { authenticationAuth } from '@tusklabs/authentication/auth';

export function App() {
  return (
    <div>
      <NxWelcome title="product-store" />
    </div>
  );
}

export default App;
