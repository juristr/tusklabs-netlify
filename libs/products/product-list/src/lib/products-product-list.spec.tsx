import { render } from '@testing-library/react';

import ProductsProductList from './products-product-list';

describe('ProductsProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsProductList />);
    expect(baseElement).toBeTruthy();
  });
});
