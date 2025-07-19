import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const PublicPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Welcome to Our App</h1>
      <p>This is a public page that anyone can see.</p>
      {!isAuthenticated && <LoginButton />}
    </div>
  );
};

export default PublicPage; 