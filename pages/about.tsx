import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Divider from '@mui/material/Divider';
import { CardContent } from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import PetsIcon from '@mui/icons-material/Pets';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import CategoryIcon from '@mui/icons-material/Category';
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentPhoto, filterVal, lightboxOpen, photos } from "../src/recoil/atoms";
import { itemData } from "../src/components/allPhotos";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Head from 'next/head'
import Image from 'next/image'
import CakeIcon from '@mui/icons-material/Cake';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

const titles = 'primary.dark'

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

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
        if (filtVal !== '') {
            let shuffled = itemData
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                .filter(x => x.category === filtVal)
            setPhotosList(shuffled)
        } else {
            let shuffled = itemData
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            setPhotosList(shuffled)
        }
        setCurPhoto(0)
    }, [filtVal])
    return (
        <>
            <Head>
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Jacob Brown Photos - Canal Winchester, Ohio Professional Photographer / Videographer. Book me for professional headshots, family photos, senior photos, product photos, pet photos, baby photos, and much more."
                />
                <meta name="robots" content="index,follow" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>ABOUT | Jacob Brown Photos - Canal Winchester, Ohio Photographer / Videographer</title>
            </Head>
            <Grid container spacing={2} sx={{ m: 1 }}>
                <Grid xs={12} md={6} lg={4} sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Card id='about' elevation={3} sx={{ maxWidth: 400, borderRadius: '15px', alignSelf: 'center', justifySelf: 'center' }}>
                            <CardMedia
                                component="img"
                                src='/images/headshot0.jpeg'
                                title="headshot0"
                                sx={{ minHeight: 300 }}
                            />
                            <CardContent>
                                <Stack spacing={1}>
                                    <Grid container xs={12} spacing={0} sx={{ p: 0 }} justifyContent='space-between' alignItems='center'>
                                        <Grid xs='auto'>
                                            <Typography variant='h6' component='h1' sx={{ fontWeight: '600' }} display='inline' color={titles}>
                                                A little about me...
                                            </Typography>
                                        </Grid>
                                        <Grid xs='auto'>
                                            <IconButton component='a' href='https://www.facebook.com/jacobbrownphoto/' target='blank'>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton component='a' href='https://www.instagram.com/_jacobbrownphotos/' target='blank'>
                                                <InstagramIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Typography variant='body1' color='text.secondary'>
                                        I've been taking photos and making videos since I got my first phone. I really started to develop my skills in 2017 with my first DSLR.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I started this professionally for two reasons: so I can help small businesses improve their online presence, and so I can help people have moments they can look back on with love. I love local businesses and believe photography can affect growth dramatically.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        This is my side business. I work full time as an engineer in the automotive industry. I believe my engineering background gives me a very methodical approach to photography. I know the in's and out's of how my cameras/lenses work and feel that gives me a unique take on capturing powerful moments technically.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        If you're curious, I use Canon cameras. I prefer their skin tones straight out of camera and I have the best luck with their colors. Mainly just a personal preference, to be honest.  I'm still using DSLRs, mainly because of how tried and true they are. It also doesn't hurt that mirrorless cameras require a large investment to switch.
                                    </Typography>
                                    <div>
                                        <Typography variant='body1' sx={{ fontWeight: '400' }} color='text.secondary'>
                                            serving areas:
                                        </Typography>
                                        <Chip
                                            clickable
                                            component='a'
                                            href='https://goo.gl/maps/TEt1tz22ZZFeGAnS8'
                                            target='blank'
                                            color='secondary'
                                            label='Canal Winchester'
                                            sx={{ mr: 1 }} />
                                        <Chip
                                            clickable
                                            component='a'
                                            target='blank'
                                            href='https://goo.gl/maps/uTXtgAcmXNW39pXT7'
                                            color='secondary'
                                            label='Pickerington' />
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
                                <Paper elevation={3} sx={{ p: 1, borderRadius: '15px' }}>
                                    <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                        Styling and What to Expect
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.secondary'>
                                        if you need something specific, please reach out and let's talk
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{mt:1}}>
                                        Photography Style
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        My style is generally a clean and natural look. This involves lots of prep/setup on the front end, then color correcting and slight general editing. I tend to not heavily color grade my photos. If you're looking for a specific style, let me know and we can talk.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{mt:1}}>
                                        Videography Style
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        It depends. Wedding videos and short films, I usually prefer a filmic, timeless look with a light general color grade. For business promotionals, these are usually bright and polished. We will work out the details before shooting.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{mt:1}}>
                                        How you'll get the product
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Photo deliveries are through an online gallery. Video deliveries may be through Google Drive, YouTube, or OneDrive if the file size is very large.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{mt:1}}>
                                        When you'll get the product
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        For small sessions, usually my turnaround time is under a week.
                                        For large events / weddings you can expect two weeks. We will work out these details per session.
                                        Turnaround time on videos can be longer depending on what it is. Weddings generally take two weeks.
                                    </Typography>
                                </Paper>
                            </Grow>
                        </Stack>
                        <Stack spacing={1} id='pricing'>
                            <Grow
                                in={true}
                                {...({ timeout: 400 })}
                            >
                                <Paper elevation={3} sx={{ p: 1, borderRadius: '15px' }}>
                                    <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                        Session Information
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{mt:1}}>
                                        Pricing this kind of work is very challenging...
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        It depends how long of a session you want, how long the video needs to be, where the location is, what turnaround time do you need, etc.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        The prices below are just a starting point for you to reference and compare to other people. If you want an actual estimate, please reach out and I can give you an estimate quickly.
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
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$300</Avatar>
                                                <Typography variant='body2' sx={{ fontWeight: '400'}} color='text.secondary'>
                                                    /hr
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('event')}
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="wedding photos / video"
                                                    icon={<CakeIcon />}/>
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('event')}
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="event photos / video"
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
                            {...({ timeout: 400 * 3 })}
                        >
                            <Paper elevation={3} sx={{ p: 1, borderRadius: '15px' }}>
                                <Stack spacing={1}>
                                    <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                        Contact
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        For any inquiring, please text or email me. If you call, please leave me a voicemail. I look forward to helping your business thrive!
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
                                </Stack>
                            </Paper>
                        </Grow>
                    </Stack>
                </Grid>
            </Grid>
            <Grid xs={12} sx={{ mt: 1 }}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{ p: '1', textAlign: 'center', height: '100%' }} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by &copy; Jacob Brown Photos</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}
