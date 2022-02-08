import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Cart from './containers/Cart';
import Orderitem from './containers/Orderitem';
import Thanks from './containers/Thanks';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/Signin'} component={Signin} />
                <Route exact path={'/Cart'} component={Cart} />
                <Route exact path={'/Orderitem'} component={Orderitem} />
                <Route exact path={'/Thanks'} component={Thanks} />

            </Switch>
        </>
    );
};
export default Router;
