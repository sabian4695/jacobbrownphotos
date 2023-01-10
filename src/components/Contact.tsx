import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

export default function Contact() {

    return (
        <>
            <Grid container spacing={3} sx={{p:2}}>
                <Grid xs={12} sm={6}>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Paper elevation={3} sx={{p:1}}>
                            <Typography variant='h5'>
                                Phone
                            </Typography>
                            <Typography>
                                (614) 859-5782
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*2 })}
                    >
                        <Paper elevation={3} sx={{p:1}}>
                            <Typography variant='h5'>
                                Email
                            </Typography>
                            <Typography>
                                jbrow4@gmail.com
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
            </Grid>
        </>
    )
}