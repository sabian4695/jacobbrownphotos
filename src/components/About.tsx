import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

export default function About() {

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
                                Hi! My name is Jacob.
                            </Typography>
                            <Typography variant='body1'>
                                I have dabbled in photography for years
                                for fun, but now I'm doing it part time.
                            </Typography>
                            <Typography variant='body2'>
                                I don't have a crazy portfolio or years of professional experience - but my rates reflect this.
                                Please contact me for any inquiries!
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
            </Grid>
        </>
    )
}