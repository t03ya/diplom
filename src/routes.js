import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './Header/Header'
import AuthPage from "./AuthPage/AuthPage";
import RegistryPage from "./RegistryPage/RegistryPage";
import CarsList from "./Cars/CarsList";
import DriversList from "./Drivers/DriversList";
import WaybillsList from "./Waybills/WaybillsList"
import DriverInfo from './Drivers/DriverInfo'
import CarInfo from "./Cars/CarInfo";

const Routes = () => (
    <BrowserRouter>
      <Header test={123} />
        <Switch>
            <Route path='/' exact render={() => <AuthPage />}/>
            <Route path='/registration' render={() => <RegistryPage />}/>
            <Route path='/cars' render={() => <CarsList />}/>
            <Route path='/drivers' render={() => <DriversList />}/>
            <Route path='/driverInfo' render={() => <DriverInfo />}/>  
            <Route path='/carInfo' render={() => <CarInfo />}/>
            <Route path='/waybills' render={() => <WaybillsList />}/>           
        </Switch>
    </BrowserRouter>
  );

export default Routes;
