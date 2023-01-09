import React from 'react';
import logo from './logo.svg';
import './App.css';
import { redirect, useLocation } from "react-router-dom";
import {
  Link as RouterLink,
} from 'react-router-dom';
import {Navigate, Outlet} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function App() {
  let location = useLocation();
  const [tabValue, setTabValue] = React.useState(location.pathname);

  return (
    <div className="App">
      <Outlet/>
      <BottomNavigation
                  showLabels
                  value={tabValue}
                  onChange={(event, newValue: string) => {
                    setTabValue(newValue);
                    redirect("/" + newValue)
                  }}>
                <BottomNavigationAction label="Main" value='/main' component={RouterLink} to="main" />
                <BottomNavigationAction label="About" value='/about' component={RouterLink} to="about" />
                <BottomNavigationAction label="Pricing" value='/pricing' component={RouterLink} to="pricing" />
                <BottomNavigationAction label="Contact" value='/contact' component={RouterLink} to="contact" />
              </BottomNavigation>
    </div>
  );
}

export default App;
