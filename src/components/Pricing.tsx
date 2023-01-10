import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import FaceIcon from '@mui/icons-material/Face';
import GroupIcon from '@mui/icons-material/Group';

export default function Pricing() {

    return (
        <>
            <Grid container spacing={3} sx={{p:1}}>
                <Grid xs={12} sm={6} lg={4}>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                            <Stack spacing={1}>
                                <Typography variant='h6' sx={{ fontWeight: '600'}} color='text.secondary'>
                                    Individual
                                </Typography>
                                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                    <Chip variant="outlined"
                                          label="professional headshot"
                                          icon={<WorkIcon />}/>
                                    <Stack direction='row' spacing={1} alignItems='center'>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>$50</Avatar>
                                        <Typography>/img</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                    <Chip variant="outlined"
                                          label="senior / general portraits"
                                          icon={<FaceIcon />}/>
                                    <Stack direction='row' spacing={1} alignItems='center'>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>$60</Avatar>
                                        <Typography>/hr*</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid xs={12} sm={6} lg={4}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*2 })}
                    >
                        <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                            <Stack spacing={1}>
                                <Typography variant='h6' sx={{ fontWeight: '600'}} color='text.secondary'>
                                    Group
                                </Typography>
                                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                                    <Chip variant="outlined"
                                          label="family / group photos"
                                          icon={<GroupIcon />}/>
                                    <Stack direction='row' spacing={1} alignItems='center'>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>$75</Avatar>
                                        <Typography>/hr*</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grow>
                </Grid>
                <Grid xs={12} lg={4}>
                    <Grow
                        in={true}
                        {...({ timeout: 400*2 })}
                    >
                        <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                            <Typography variant='subtitle2' sx={{fontWeight: '200'}}>
                                * - meaning
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                prices with * are starting rates. Reasons for increases: far away/multiple locations, etc.
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                We will agree on pricing before any sessions are scheduled. Nothing will ever be thrown at you after the fact.
                            </Typography>
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