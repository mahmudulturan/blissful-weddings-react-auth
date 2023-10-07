import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='min-h-[93vh] flex items-center justify-center'>
            <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#EDF2F8', '#FFD700', '#A8D5BA', '#0D1621', '#FFD700']}
      />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;