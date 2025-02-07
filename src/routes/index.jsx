import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { roles } from '../utils/role';

import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';
import { UserRoutes } from './user.routes';

export function Routes(){

    const { user } = useAuth();

    function AppRoutes(){
        if(user?.role === roles.ADMIN){
            return <AdminRoutes />
        }
        if(user?.role === roles.USER){
            return <UserRoutes />
        }
    }

    return(
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
};
