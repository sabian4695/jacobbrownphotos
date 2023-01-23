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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import EventIcon from '@mui/icons-material/Event';
import {eventComing} from "./index";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const theme1 = useTheme();
  const bigger = useMediaQuery(theme1.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [openSnack, setOpenSnack] = React.useState(eventComing);
  const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
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
            <Box sx={bigger ? {flexGrow:1} : null}>
              {bigger ?
                  <>
                    <Button sx={{mr:1}} component={RouterLink} to="gallery" startIcon={<CameraRollIcon />}>
                      Gallery
                    </Button>
                    <Button component={RouterLink} to="about" startIcon={<InfoIcon />}>
                      About
                    </Button>
                    {eventComing ?
                        <Button component={RouterLink} to="events" startIcon={<EventIcon />}>
                          Events
                        </Button>
                        :
                        null}

                  </>
                  :
                  <>
                    <IconButton
                        sx={{alignSelf: 'flex-end'}}
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleOpenMenu}
                    >
                      <MenuIcon/>
                    </IconButton>
                  </>
              }
            </Box>
          </Toolbar>
        </AppBar>
          <Box component="main"
            sx={{p: 1, width:'100%'}}>
            <Toolbar/>
            <Outlet />
          </Box>
        <Lightbox/>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        >
          <MenuItem onClick={handleCloseMenu} component={RouterLink} to="gallery">
            <ListItemIcon>
              <CameraRollIcon />
            </ListItemIcon>
            <ListItemText>
              Gallery
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} component={RouterLink} to="about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>
              About
            </ListItemText>
          </MenuItem>
          {eventComing ?
              <MenuItem onClick={handleCloseMenu} component={RouterLink} to="events">
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText>
                  Events
                </ListItemText>
              </MenuItem>
              : null
          }

        </Menu>
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
          <Alert onClose={handleCloseSnack} severity="info" sx={{ width: '100%' }}>
            Hey, there's a headshot event coming up on 01/22/23
            <Button sx={{mx:1}} color='inherit' variant='outlined' size='small' component={RouterLink} to="events">CLICK HERE</Button>
            to learn more!
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}

export default App;
