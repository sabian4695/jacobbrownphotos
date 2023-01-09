import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Contact() {

    return (
        <>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <Paper elevation={3} sx={{p:1}}>
                        <Typography variant='h6'>
                            Phone
                        </Typography>
                        <Typography>
                            (614) 859-5782
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Paper elevation={3} sx={{p:1}}>
                        <Typography variant='h6'>
                            Email
                        </Typography>
                        <Typography>
                            jbrow4@gmail.com
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}