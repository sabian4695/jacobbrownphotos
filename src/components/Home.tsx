import React from 'react';
import Grow from '@mui/material/Grow';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../logo.png";
import Chip from "@mui/material/Chip";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import PetsIcon from "@mui/icons-material/Pets";
import FaceIcon from "@mui/icons-material/Face";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import FestivalIcon from "@mui/icons-material/Festival";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import BlurOnIcon from "@mui/icons-material/BlurOn";

export default function Gallery() {
    React.useEffect(() => {
        document.title = 'Jacob Brown Photos';
    }, []);

    return (
        <>
            <Grid container sx={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                <Grid xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <img
                        height='100'
                        src={logo}
                        srcSet={`${logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='logo'
                        loading="lazy"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '200', letterSpacing: 10}}
                        variant='h6'
                    >
                        Jacob Brown Photos
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant='body1'
                    >
                        Columbus, Ohio Photographer
                    </Typography>
                </Grid>
                <Grid container direction='row' spacing={1} sx={{display:'flex', justifyContent:'center'}}>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="professional headshots"
                            icon={<WorkIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="family photos"
                            icon={<FamilyRestroomIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="weddings / events"
                            icon={<FestivalIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="product photos"
                            icon={<CategoryIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="Other - let's talk!"
                            icon={<BlurOnIcon />}/>
                    </Grid>
                </Grid>
                <Grid xs={12} spacing={2}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant='body1'
                    >
                        Jacob Brown Photos is a Columbus Ohio Photographer specializing in professional headshots, family photos, and product photos.
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '200', fontStyle: 'italic'}}
                        variant='body1'
                    >
                        Create photos that capture an experience. Look back and feel what you felt in that moment.
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '200', fontStyle: 'italic'}}
                        variant='subtitle2'
                    >
                        Remember your past. Never let these memories go.
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant='subtitle2'
                    >
                        Jacob Brown Photos is owned and operated by Jacob Brown, working mainly out of the
                        historic downtown Canal Winchester, Pickerington, Caroll, and surrounding areas.
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{p:'1', textAlign:'center', height:'100%'}} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by &copy; Jacob Brown Photos</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}