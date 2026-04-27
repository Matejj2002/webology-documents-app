// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ errorCode:"AUTH_FAILED" }}/>;
    }

    return <Outlet />;
};

export default ProtectedRoute;