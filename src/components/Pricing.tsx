import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

export default function Pricing() {

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
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*2 })}
                    >
                        <Paper elevation={3} sx={{p:1}}>
                            <Typography variant='h5'>
                                Group
                            </Typography>
                            <Typography>
                                family - $75 /hr
                            </Typography>
                            <Typography>
                                other - $75 /hr
                            </Typography>
                        </Paper>
                    </Grow>
                </Grid>
            </Grid>
        </>
    )
}