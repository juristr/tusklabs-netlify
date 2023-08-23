// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { authenticationAuth } from '@tusklabs/authentication/auth';
import { AuthenticationUserManagement } from '@tusklabs/authentication/user-management';
import { OrdersOrderList } from '@tusklabs/orders/order-list';
import { ProductsProductList } from '@tusklabs/products/product-list';

export function App() {
  return (
    <div>
      <NxWelcome title="store-admin" />
    </div>
  );
}

export default App;
