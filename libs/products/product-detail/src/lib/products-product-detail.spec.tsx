import { render } from '@testing-library/react';

import ProductsProductDetail from './products-product-detail';

describe('ProductsProductDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsProductDetail />);
    expect(baseElement).toBeTruthy();
  });
});
