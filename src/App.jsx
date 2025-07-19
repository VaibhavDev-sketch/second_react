import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
import PublicPage from "./components/PublicPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyle: 'none', padding: '1rem' }}>
            <li style={{ display: 'inline', marginRight: '1rem' }}>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <li style={{ display: 'inline', marginRight: '1rem' }}>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            <li style={{ display: 'inline' }}>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;