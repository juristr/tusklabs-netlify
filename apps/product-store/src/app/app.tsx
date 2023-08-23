// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { ProductsProductList } from '@tusklabs/products/product-list';
import { OrdersOrderList } from '@tusklabs/orders/order-list';
import { authenticationAuth } from '@tusklabs/authentication/auth';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NxWelcome title="Product Store" />}></Route>
        <Route path="/products" element={<ProductsProductList />}></Route>
        <Route path="/orders" element={<OrdersOrderList />}></Route>
      </Routes>
    </>
  );
}

export default App;
