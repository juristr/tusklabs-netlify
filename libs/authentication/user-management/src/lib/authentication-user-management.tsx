import styles from './authentication-user-management.module.css';

/* eslint-disable-next-line */
export interface AuthenticationUserManagementProps {}
import { authenticationAuth } from '@tusklabs/authentication/auth';

export function AuthenticationUserManagement(
  props: AuthenticationUserManagementProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthenticationUserManagement!</h1>
    </div>
  );
}

export default AuthenticationUserManagement;
