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

export const primaryMain = '#5bcfae'
export const secondaryMain = '#cf5b7c'

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
  const [tabValue, setTabValue] = React.useState(location.pathname);
  if (location.pathname === '/') { return <Navigate to="/main" /> }
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
                setTabValue(newValue);
                redirect("/" + newValue)
              }}>
              <BottomNavigationAction label="Main" value='/main' component={RouterLink} to="main" icon={<CameraRollIcon />} />
              <BottomNavigationAction label="About" value='/about' component={RouterLink} to="about" icon={<InfoIcon />} />
              <BottomNavigationAction label="Pricing" value='/pricing' component={RouterLink} to="pricing" icon={<PaymentsIcon />} />
              <BottomNavigationAction label="Contact" value='/contact' component={RouterLink} to="contact" icon={<PermContactCalendarIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
