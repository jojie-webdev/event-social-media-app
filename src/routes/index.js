import React, { Suspense, useEffect, lazy } from 'react';
import { 
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import App from '../App';


const history = createBrowserHistory();

const CustomRoutes = () => {
    return (
        <Router history={history}>
            <Routes>
                {routes.map((route, i) => {
                    const { path, exact, Component } = route;
                    return ( 
                        <Route key={i} path={path}
                            exact={exact}
                            element={Component}
                        />
                    );
                })}

                <Route path="*" element={<App />}/>
            </Routes>
        </Router>
    );

}

export default CustomRoutes;