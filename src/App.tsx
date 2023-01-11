import React from 'react';
import './App.css';
import { redirect, useLocation } from "react-router-dom";
import {
  Link as RouterLink,
} from 'react-router-dom';
import { Navigate, Outlet } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import PaymentsIcon from '@mui/icons-material/Payments';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { HashLink } from 'react-router-hash-link';

export const primaryMain = '#679bac'
export const secondaryMain = '#648777'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryMain
    },
    secondary: {
      main: secondaryMain
    }
  }
})

function App() {
  let location = useLocation();
  const [tabValue, setTabValue] = React.useState(location.pathname)
  if (location.pathname === '/') { return <Navigate to="/gallery" /> }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{width:'100%', display: 'flex'}}>
          <Box component="main"
            sx={{p: 1,pt:2, mb: 8, width:'100%'}}>
            <Typography variant='h6' sx={{fontWeight: '200'}}>
              Photos by EngineerIt
            </Typography>
            <Outlet />
          </Box>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={5}>
            <BottomNavigation
              showLabels
              value={tabValue}
              onChange={(event, newValue: string) => {
                if (newValue === '/pricing' || newValue === '/contact') {
                  newValue = '/about'
                }
                setTabValue(newValue);
                if (newValue === '/about') {
                  window.scrollTo(0, 0);
                }
              }}>
              <BottomNavigationAction label="Gallery" value='/gallery' component={RouterLink} to="gallery" icon={<CameraRollIcon />} />
              <BottomNavigationAction label="About" value='/about' component={RouterLink} to="about" icon={<InfoIcon />} />
              <BottomNavigationAction label="Pricing" value='/pricing' component={HashLink} to={"/about#pricing"} icon={<PaymentsIcon />} />
              <BottomNavigationAction label="Contact" value='/contact' component={HashLink} to={"/about#contact"} icon={<PermContactCalendarIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
