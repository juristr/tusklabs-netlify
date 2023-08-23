import { render } from '@testing-library/react';

import OrdersUi from './orders-ui';

describe('OrdersUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrdersUi />);
    expect(baseElement).toBeTruthy();
  });
});
