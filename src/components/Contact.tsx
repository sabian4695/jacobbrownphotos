import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return (
        <>
            <Grid container spacing={3} sx={{p:1}}>
                <Grid xs={12}>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Paper elevation={3} sx={{p:2, borderRadius:'15px'}}>
                            <Typography variant='subtitle1' sx={{ fontWeight: '600'}} color='text.secondary'>
                                I'm available most normal hours - send me a text or email to start
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*2 })}
                    >
                        <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                            <Typography variant='h6' sx={{ fontWeight: '600'}} color='text.secondary'>
                                Phone
                            </Typography>
                            <Button
                                fullWidth
                                disableElevation
                                variant='contained'
                                href="tel:6145821480"
                                endIcon={<PhoneAndroidIcon />}
                            >
                                (614) 859-5782
                            </Button>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*3 })}
                    >
                        <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                            <Typography variant='h6' sx={{ fontWeight: '600'}} color='text.secondary'>
                                Email
                            </Typography>
                            <Button
                                fullWidth
                                disableElevation
                                variant='contained'
                                href="mailto:jbrow4@gmail.com"
                                endIcon={<EmailIcon />}
                            >
                                jbrow4@gmail.com
                            </Button>
                        </Paper>
                    </Grow>
                </Grid>
            </Grid>
            <Grid xs={12}>
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