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
import {Navigate} from "react-router-dom";

const titles = 'primary.dark'

export default function About() {
    if (!eventComing) {
        if (location.pathname === '/events') { return <Navigate to="/gallery" /> }
    }
    return (
        <>
            <Grid container spacing={2} sx={{m:1}}>
                <Grid xs={12} md={6} lg={4} sx={{mb:3}}>
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
                                    <Grid container xs={12} spacing={0} sx={{p:0}} justifyContent='space-between' alignItems='center'>
                                        <Typography variant='h6' sx={{ fontWeight: '600'}} display='inline' color={titles}>
                                            Professional Headshot Event
                                        </Typography>
                                    </Grid>
                                    <Typography variant='body1' color='text.secondary'>
                                        Sign up via the link below to grab a spot for a professional headshot.
                                    </Typography>
                                    <Button component='a' href=''>Book Now</Button>
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
                        <Typography variant='caption' color='text.secondary'>website made by Jacob Brown</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}