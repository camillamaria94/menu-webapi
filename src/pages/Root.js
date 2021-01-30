import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Footer from 'components/layout/Footer/index'
import Login from './Application/Login/index'
import PrivateRoute from '../routes/privateRoute'
import Aplication from './Application/index'
import Header from 'components/header/index'
import PagesAppRegisterMenu from './Application/Cards/Cards'
import changePassword from './Application/ChangePassword/index'

const Root = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <PrivateRoute path="/application" component={Aplication} />
                <Route path="/changePassword/:id" component={changePassword}></Route>
                <Route path="/login" component={Login} />
                <Route path="/" component={PagesAppRegisterMenu} />
                


            </Switch>
            <Footer />
        </Router>
    )
}

export default Root;