import { render } from '@testing-library/react';

import AuthenticationUserManagement from './authentication-user-management';

describe('AuthenticationUserManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthenticationUserManagement />);
    expect(baseElement).toBeTruthy();
  });
});
