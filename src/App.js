// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuthClient } from './utils/auth';

const auth = getAuthClient();

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     auth.isLoggedIn()
    //         .then(() => {
    //             // navigate('/dashboard/default');
    //         })
    //         .catch(() => {
    //             navigate('/login');
    //         });
    // }, [navigate]);

    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
