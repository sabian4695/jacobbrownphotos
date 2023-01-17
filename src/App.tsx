import React from 'react';
import { useLocation } from "react-router-dom";
import {
  Link as RouterLink,
} from 'react-router-dom';
import { Navigate, Outlet } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './logo.png'
import Lightbox from "./components/Lightbox";

export const primaryMain = '#679bac'
export const secondaryMain = '#648777'
export const primaryRGB = '103, 155, 172'

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
  if (location.pathname === '/') { return <Navigate to="/gallery" /> }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor:'background.paper', color:'primary.main'}}>
          <Toolbar>
            <img
                height='30'
                src={logo}
                srcSet={`${logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt='logo'
                loading="lazy"
            />
            <Typography
                variant="h6"
                component="div"
                sx={{fontWeight: '200', flexGrow: 1, ml:0.5}}
            >
              photos
            </Typography>
            <Box sx={{flexGrow:1}}>
              <Button sx={{mr:1}} component={RouterLink} to="gallery" startIcon={<CameraRollIcon />}>
                Gallery
              </Button>
              <Button component={RouterLink} to="about" startIcon={<InfoIcon />}>
                About
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
          <Box component="main"
            sx={{p: 1, width:'100%'}}>
            <Toolbar/>
            <Outlet />
          </Box>
        <Lightbox/>
      </ThemeProvider>
    </>
  );
}

export default App;
