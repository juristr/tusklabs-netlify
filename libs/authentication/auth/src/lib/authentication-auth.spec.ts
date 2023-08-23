import { authenticationAuth } from './authentication-auth';

describe('authenticationAuth', () => {
  it('should work', () => {
    expect(authenticationAuth()).toEqual('authentication-auth');
  });
});
