import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Pricing() {

    return (
        <>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <Paper elevation={3} sx={{p:1}}>
                        <Typography variant='h6'>
                            Individual
                        </Typography>
                        <Typography>
                            professional headshot - $50
                        </Typography>
                        <Typography>
                            senior pics - $60 /hr
                        </Typography>
                        <Typography>
                            general portrait - $60 /hr
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Paper elevation={3} sx={{p:1}}>
                        <Typography variant='h6'>
                            Group
                        </Typography>
                        <Typography>
                            family - $75 /hr
                        </Typography>
                        <Typography>
                            other - $75 /hr
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}