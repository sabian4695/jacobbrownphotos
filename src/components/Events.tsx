import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import headshot0 from '../photos/headshot0.jpeg'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {CardContent} from "@mui/material";
import {eventComing} from "../index";
import {Navigate, useLocation} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Chip from '@mui/material/Chip';
import EventIcon from '@mui/icons-material/Event';
import Avatar from "@mui/material/Avatar";

const titles = 'primary.dark'

export default function About() {
    let location = useLocation();
    React.useEffect(() => {
        document.title = 'EVENTS | Jacob Brown Photos';
    }, []);
    if (!eventComing) {
        if (location.pathname === '/events') {
            return <Navigate to="/gallery" /> }
    }
    return (
        <>
            <Grid container spacing={2} sx={{m:1}}>
                <Grid xs={12} sx={{mb:3, display:'flex',alignItems:'center', justifyContent:'center'}} id='CHECK'>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Card id='about' elevation={3} sx={{maxWidth: 400, borderRadius:'15px', alignSelf:'center', justifySelf:'center'}}>
                            <CardMedia
                                component="img"
                                image={headshot0}
                                title="headshot0"
                            />
                            <CardContent>
                                <Stack spacing={1}>
                                    <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                        <Typography variant='h6' sx={{ fontWeight: '600'}} display='inline' color={titles}>
                                            Professional Headshot Event
                                        </Typography>
                                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$75</Avatar>
                                    </Stack>
                                    <Chip
                                        label='Feb 18th, 2023 | 1PM - 4PM'
                                        icon={<EventIcon/>}
                                        color='secondary'
                                        variant='outlined'
                                    />
                                    <Typography variant='body1' color='text.secondary'>
                                        Do you need an updated headshot for LinkedIn?
                                        Whether you are just entering the professional world or have been in a career for decades, an updated
                                        professional headshot is a great way show people who you are. It's perfect for LinkedIn, email signatures,
                                        and much more.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I'm offering mini 15 - minute sessions from 1-4PM. There aren't many spots, so sign up now!
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary'>
                                        I'll be offering two backdrops - grey and brick.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Grab a spot via the link below
                                    </Typography>
                                    <Button color='secondary'
                                            variant='contained'
                                            component='a'
                                            target='blank'
                                            endIcon={<ExitToAppIcon/>}
                                            href='https://squareup.com/appointments/book/k825d7pagz5h33/LB1MVWYW2084G/start'>
                                        Book Now
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grow>
                </Grid>
            </Grid>
            <Grid xs={12} sx={{mt:1}}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{p:'1', textAlign:'center', height:'100%'}} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by &copy; Jacob Brown Photos</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}