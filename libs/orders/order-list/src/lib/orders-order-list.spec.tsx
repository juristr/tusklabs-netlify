import { render } from '@testing-library/react';

import OrdersOrderList from './orders-order-list';

describe('OrdersOrderList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrdersOrderList />);
    expect(baseElement).toBeTruthy();
  });
});
