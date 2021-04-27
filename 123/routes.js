import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './Header/Header'
import AuthPage from "./AuthPage/AuthPage";
import RegistryPage from "./RegistryPage/RegistryPage";
import CarsList from "./Cars/CarsList";


const Routes = () => (
    <BrowserRouter>
      <Header test={123} />
        <Switch>
            <Route path='/' exact render={() => <AuthPage />}/>
            <Route path='/registration' render={() => <RegistryPage />}/>
            <Route path='/cars' render={() => <CarsList />}/>
            {/* <Route path='/cars/carInfo/:carId?' render={() => <CarInfo />}/>         */}
        </Switch>
    </BrowserRouter>
  );

export default Routes;
