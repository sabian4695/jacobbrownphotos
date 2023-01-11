import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import headshot0 from '../photos/headshot0.jpeg'
import Chip from '@mui/material/Chip';
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import {useRecoilState} from "recoil";
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import GroupIcon from "@mui/icons-material/Group";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Divider from '@mui/material/Divider';
import {CardContent} from "@mui/material";

const titles = 'primary.dark'

export default function About() {
    return (
        <>
            <Grid container spacing={2} sx={{m:1}}>
                <Grid xs={12} md={4}>
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
                                    <Typography variant='h6' sx={{ fontWeight: '600'}} color={titles}>
                                        Hi! My name is Jacob.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I've dabbled in photography for years
                                        as a hobby, but now I'm doing it part time.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I don't have a crazy portfolio or years of professional experience - but my rates reflect this.
                                    </Typography>
                                    <div>
                                        <Typography variant='body1' sx={{ fontWeight: '600'}} color='text.secondary'>
                                            locations:
                                        </Typography>
                                        <Chip color='secondary' label='Canal Winchester' sx={{mr:1}}/>
                                        <Chip color='secondary' label='Pickerington'/>
                                    </div>
                                    <div>
                                        <Typography display='inline'>
                                            Please
                                        </Typography>
                                        <Button
                                            color='primary'
                                            disableElevation
                                            variant='text'
                                            component='a'
                                            href='#contact'
                                        >
                                            contact me
                                        </Button>
                                        <Typography display='inline'>
                                            for inquiries!
                                        </Typography>
                                    </div>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grow>
                </Grid>
                <Grid xs={12} md={8} sx={{my:4}} alignSelf='center'>
                    <Stack spacing={5}>
                        <Stack spacing={1} id='pricing'>
                            <Grow
                                in={true}
                                {...({ timeout: 400 })}
                            >
                                <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                                    <Typography variant='h5' sx={{ fontWeight: '600'}} color={titles}>
                                        Pricing
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                            Individual Sessions
                                        </Typography>
                                        <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                            <Chip
                                                  color='secondary'
                                                  label="professional headshot"
                                                  icon={<WorkIcon />}/>
                                                <Avatar sx={{ bgcolor: 'secondary.main', width: 50, height: 50 }}>$75</Avatar>
                                        </Stack>
                                        <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                            <Chip
                                                  color='secondary'
                                                  label="senior / general portraits"
                                                  icon={<FaceIcon />}/>
                                            <Avatar sx={{ bgcolor: 'secondary.main', width: 50, height: 50 }}>$150</Avatar>
                                        </Stack>
                                    </Stack>
                                    <Divider sx={{my:1}}/>
                                    <Stack spacing={1}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                            Group Sessions
                                        </Typography>
                                        <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                            <Chip
                                                  color='secondary'
                                                  label="family / group photos"
                                                  icon={<GroupIcon />}/>
                                            <Avatar sx={{ bgcolor: 'secondary.main', width: 50, height: 50 }}>$175</Avatar>
                                        </Stack>
                                    </Stack>
                                    <Typography variant='body2' sx={{mt:1}} color='text.disabled'>
                                        prices are starting rates
                                    </Typography>
                                </Paper>
                            </Grow>
                        </Stack>
                        <Grow
                            id='contact'
                            in={true}
                            {...({ timeout: 400*3 })}
                        >
                            <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                                <Stack spacing={1}>
                                    <Typography variant='h5' sx={{ fontWeight: '600'}} color={titles}>
                                        Contact
                                    </Typography>
                                    <Button
                                        color='secondary'
                                        fullWidth
                                        disableElevation
                                        variant='contained'
                                        href="tel:6145821480"
                                        endIcon={<PhoneAndroidIcon />}
                                    >
                                        (614) 859-5782
                                    </Button>
                                    <Button
                                        color='secondary'
                                        fullWidth
                                        disableElevation
                                        variant='contained'
                                        href="mailto:jbrow4@gmail.com"
                                        endIcon={<EmailIcon />}
                                    >
                                        jbrow4@gmail.com
                                    </Button>
                                </Stack>
                            </Paper>
                        </Grow>
                    </Stack>
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