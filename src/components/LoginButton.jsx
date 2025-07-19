import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, error } = useAuth0();

  if (error) {
    return <div>Authentication Error: {error.message}</div>;
  }

  return (
    <button 
      onClick={() => loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      })}
    >
      Log In
    </button>
  );
};

export default LoginButton;