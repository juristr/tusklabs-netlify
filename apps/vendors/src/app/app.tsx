// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { authenticationAuth } from '@tusklabs/authentication/auth';
import { ProductsProductList } from '@tusklabs/products/product-list';

export function App() {
  return (
    <div>
      <NxWelcome title="vendors" />
    </div>
  );
}

export default App;
