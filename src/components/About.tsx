import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function About() {

    return (
        <>
            <Grid container>
                <Grid xs={12} sm={6}>
                    <Paper elevation={3} sx={{p:1}}>
                        <Typography variant='h6'>
                            Hi! My name is Jacob.
                        </Typography>
                        <Typography>
                            I have dabbled in photography for years
                            for fun, but am now going to do it part time. I don't have a crazy portfolio
                            or years of professional experience - but my rates reflect this.
                            Please contact me for any inquiries!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}