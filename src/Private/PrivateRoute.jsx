import { Navigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return 'loading'
    }
    else if (!user.email) {
        return <Navigate to={'/login'}></Navigate>
    }
    else {
        return children;
    }
};
PrivateRoute.propTypes = {
    children:PropTypes.node
};

export default PrivateRoute;
