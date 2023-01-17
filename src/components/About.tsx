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
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import GroupIcon from "@mui/icons-material/Group";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Divider from '@mui/material/Divider';
import {CardContent} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CakeIcon from '@mui/icons-material/Cake';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FestivalIcon from '@mui/icons-material/Festival';
import PetsIcon from '@mui/icons-material/Pets';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import CategoryIcon from '@mui/icons-material/Category';
import {useRecoilState, useSetRecoilState} from "recoil";
import {currentPhoto, filterVal, lightboxOpen, photos} from "../recoil/atoms";
import {itemData} from "./allPhotos";

const titles = 'primary.dark'

export default function About() {
    const [openModal, setOpenModal] = useRecoilState(lightboxOpen)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    function chipClick(title: string) {
        setFiltValue(title)
        setOpenModal(true)
    }
    React.useEffect(() => {
        if(filtVal !== '') {
            let shuffled = itemData
                .map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
                .filter(x => x.category === filtVal)
            setPhotosList(shuffled)
        } else {
            let shuffled = itemData
                .map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
            setPhotosList(shuffled)
        }
        setCurPhoto(0)
    }, [filtVal])
    return (
        <>
            <Grid container spacing={2} sx={{m:1}}>
                <Grid xs={12} md={6} lg={4} sx={{mb:3}}>
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
                                        I've always loved capturing moments in my life. There's nothing like looking at beautiful photos from years back, especially of your loved ones.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I started photography on a professional level so I can help you have these things as well.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Though I've taken photos my whole life, I'm just starting out professionally. So, for a short time my rates will seem pretty low to most.
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        p.s. I also love videography, so feel free to reach out to me if you have any needs in this area.
                                    </Typography>
                                    <div>
                                        <Typography variant='body1' sx={{ fontWeight: '600'}} color='text.secondary'>
                                            locations:
                                        </Typography>
                                        <Chip
                                            clickable
                                            component='a'
                                            href='https://goo.gl/maps/TEt1tz22ZZFeGAnS8'
                                            target='blank'
                                            color='secondary'
                                            label='Canal Winchester'
                                            sx={{mr:1}}/>
                                        <Chip
                                            clickable
                                            component='a'
                                            target='blank'
                                            href='https://goo.gl/maps/uTXtgAcmXNW39pXT7'
                                            color='secondary'
                                            label='Pickerington'/>
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
                <Grid xs={12} md={6} lg={8}>
                    <Stack spacing={5}>
                        <Stack spacing={1} id='styling'>
                            <Grow
                                in={true}
                                {...({ timeout: 400 })}
                            >
                                <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                                    <Typography variant='h5' sx={{ fontWeight: '600'}} color={titles}>
                                        Styling
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                        clean / natural
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        You may notice my style isn't flashy or highly edited. My preference is capturing moments as they are.
                                        This means lots of prep/setup, color correcting, and some general editing afterward.
                                        You can expect a turnaround of 2-5 days depending on number of photos and complexity.
                                    </Typography>
                                </Paper>
                            </Grow>
                        </Stack>
                        <Stack spacing={1} id='pricing'>
                            <Grow
                                in={true}
                                {...({ timeout: 400 })}
                            >
                                <Paper elevation={3} sx={{p:1, borderRadius:'15px'}}>
                                    <Typography variant='h5' sx={{ fontWeight: '600'}} color={titles}>
                                        Pricing
                                    </Typography>
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                                Individuals
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400'}} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$150</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('baby')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="baby photos"
                                                    icon={<ChildFriendlyIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('pet')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="pet photos"
                                                    icon={<PetsIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('portrait')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="senior / general portraits"
                                                    icon={<FaceIcon />}/>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{my:1}}/>
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                                Groups
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400'}} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$200</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('family')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="family photos"
                                                    icon={<FamilyRestroomIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('engagement')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="engagement photos"
                                                    icon={<FavoriteIcon />}/>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{my:1}}/>
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                                Events
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400'}} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$700</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="small wedding/elopement"
                                                    icon={<CakeIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="event photos"
                                                    icon={<FestivalIcon />}/>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{my:1}}/>
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400'}} id='pricing' color='text.secondary'>
                                                Other
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400'}} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$100</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('headshot')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="professional headshot"
                                                    icon={<WorkIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('product')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="product photos"
                                                    icon={<CategoryIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('general')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="Other - let's talk!"
                                                    icon={<BlurOnIcon />}/>
                                            </Grid>
                                        </Grid>
                                    </Stack>
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
                                        href="tel:6148595782"
                                        endIcon={<PhoneAndroidIcon />}
                                    >
                                        (614) 859-5782
                                    </Button>
                                    <Button
                                        color='secondary'
                                        fullWidth
                                        disableElevation
                                        variant='contained'
                                        href="mailto:jacobbrownphotos@gmail.com"
                                        endIcon={<EmailIcon />}
                                    >
                                        jacobbrownphotos@gmail.com
                                    </Button>
                                    {/*<Button
                                        color='secondary'
                                        fullWidth
                                        disableElevation
                                        variant='contained'
                                        component='a'
                                        target='blank'
                                        href="https://squareup.com/appointments/book/k825d7pagz5h33/LB1MVWYW2084G/start"
                                        endIcon={<EmailIcon />}
                                    >
                                        Book Online
                                    </Button>*/}
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