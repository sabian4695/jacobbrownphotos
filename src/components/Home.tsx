import React from 'react';
import Grow from '@mui/material/Grow';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FestivalIcon from "@mui/icons-material/Festival";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useRecoilState, useSetRecoilState} from "recoil";
import {currentPhoto, filterVal, lightboxOpen, photos} from "../recoil/atoms";
import {itemData} from "./allPhotos";
import Button from "@mui/material/Button";
import Link from 'next/link'
import InfoIcon from "@mui/icons-material/Info";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import Image from 'next/image'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const headerPhotos = [
    {
        img: itemData.find(x => x.title === 'Jeremy and Tiffany')?.img,
        title: 'Engagement Photo',
        category: 'engagement',
    }, {
        img: itemData.find(x => x.title === 'Baby0')?.img,
        title: 'Baby Photos',
        category: 'baby',
    }, {
        img: itemData.find(x => x.title === 'Family12')?.img,
        title: 'Family Photos',
        category: 'family',
    }, {
        img: itemData.find(x => x.title === 'Timeless Family Photos')?.img,
        title: 'Family Portraits',
        category: 'family',
    }
]

const middlePhotos = [
    {
        img: itemData.find(x => x.title === 'Engagement Photos')?.img,
        title: 'Engagement Photo',
        category: 'engagement',
    }, {
        img: itemData.find(x => x.title === 'Pet Photos')?.img,
        title: 'Pet Photos',
        category: 'pet',
    }, {
        img: itemData.find(x => x.title === 'Product Photos')?.img,
        title: 'Product Photos',
        category: 'product',
    }, {
        img: itemData.find(x => x.title === 'Family14')?.img,
        title: 'Family  Photos',
        category: 'family',
    }
]

export default function Gallery() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('sm'));
    const setOpenModal = useSetRecoilState(lightboxOpen)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)
    function chipClick(title: string) {
        setFiltValue(title)
        setOpenModal(true)
    }
    React.useEffect(() => {
        document.title = 'Jacob Brown Photos - Canal Winchester, Ohio Photographer / Videographer';
    }, []);
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
            <Grid container spacing={2} sx={{
                m:1,
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Grid xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <img
                        height='100'
                        src='/images/logo.png'
                        srcSet={`${'/images/logo.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='logo'
                        loading="lazy"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '100', letterSpacing: 10}}
                        variant={small ? 'h3' : 'h5'}
                        color='text.secondary'
                    >
                        Jacob Brown Photos
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
            }}>
                <Grid xs={12} style={{lineHeight:0}}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 2 : 1} variant="masonry">
                        {/*//@ts-ignore*/}
                        {headerPhotos.map((item, index) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={item.title}
                            >
                                <ImageListItem key={item.title}>
                                    <Image
                                        style={{objectFit:'scale-down', width:'100%', height:'auto'}}
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        placeholder='blur'
                                        blurDataURL={rgbDataURL(175, 175, 175)}
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
            }}>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant={small ? 'h3' : 'h4'}
                        color='text.secondary'
                    >
                        Canal Winchester, Ohio Photographer / Videographer
                    </Typography>
                </Grid>
                <Grid container direction='row' spacing={1} sx={{display:'flex', justifyContent:'center'}}>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('headshot')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="professional headshots"
                            icon={<WorkIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="events"
                            icon={<FestivalIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('product')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="product photos"
                            icon={<CategoryIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('general')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="Other - let's talk!"
                            icon={<BlurOnIcon />}/>
                    </Grid>
                </Grid>
                <Grid xs={12} spacing={3} sx={small ? {mx:20} : {mx:1}}>
                    <Grid>
                        <Typography
                            sx={{ fontWeight: '300'}}
                            variant='body1'
                            color='text.primary'
                        >
                            Jacob Brown Photos is a Canal Winchester, Ohio Photographer and Videographer specializing in professional headshots and wedding photography and videography.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography
                            sx={{ fontWeight: '100', fontStyle: 'italic'}}
                            variant='body2'
                            color='text.secondary'
                        >
                            Whether you want to look back on photos and feel what you felt in that moment, or have professional content for your growing business, I can help you get there.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                mb:1
            }}>
                <Grid xs={12} style={{lineHeight:0}}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 2 : 1} variant="masonry">
                        {/*//@ts-ignore*/}
                        {middlePhotos.map((item, index) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={item.title}
                            >
                                <ImageListItem key={item.title}>
                                    <Image
                                        style={{objectFit:'scale-down', width:'100%', height:'auto'}}
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        placeholder='blur'
                                        blurDataURL={rgbDataURL(175, 175, 175)}
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </Grid>
                <Grid xs={12} sx={small ? {mx:17} : {mx:1}}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant='body1'
                    >
                        Jacob Brown Photos is owned and operated by Jacob Brown, working mainly out of the
                        historic downtown Canal Winchester, Pickerington, Carroll, and surrounding areas.
                    </Typography>
                </Grid>
                <Grid xs='auto'>
                    <Button sx={{mx:1}} variant='contained' component={Link} href="about" startIcon={<InfoIcon />}>
                        About / Pricing
                    </Button>
                </Grid>
                <Grid xs='auto'>
                    <Button sx={{mx:1}} variant='contained' component={Link} href="gallery" startIcon={<CameraRollIcon />}>
                        See Gallery
                    </Button>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{p:'1', textAlign:'center', height:'100%'}} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by &copy; 2023 Jacob Brown Photos</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}