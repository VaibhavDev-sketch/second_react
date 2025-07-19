import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, error } = useAuth0();

  if (error) {
    return <div>Logout Error: {error.message}</div>;
  }

  return (
    <button onClick={() => logout({ 
      logoutParams: {
        returnTo: window.location.origin
      }
    })}>
      Log Out
    </button>
  );
};

export default LogoutButton;