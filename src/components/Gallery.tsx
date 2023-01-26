import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grow from '@mui/material/Grow';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {currentPhoto, lightboxOpen, photos, filterVal} from "../recoil/atoms";
import {useRecoilState, useSetRecoilState} from "recoil";
import {itemData} from "./allPhotos";

export default function Gallery() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('sm'));
    const setOpenModal = useSetRecoilState(lightboxOpen)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)

    React.useEffect(() => {
        document.title = 'GALLERY | Jacob Brown Photos';
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

    function openImage(id: number) {
        setCurPhoto(id)
        setOpenModal(true)
    }
    return (
        <>
            <Grid container>
                <Grid xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                        <InputLabel>Filter Pictures</InputLabel>
                        <Select
                            value={filtVal}
                            onChange={(event: SelectChangeEvent) => setFiltValue(event.target.value)}
                            label="Filter"
                        >
                            <MenuItem value=''>
                                <em>See All</em>
                            </MenuItem>
                            <MenuItem value={'engagement'}>Engagement</MenuItem>
                            <MenuItem value={'family'}>Family</MenuItem>
                            <MenuItem value={'portrait'}>Portrait</MenuItem>
                            <MenuItem value={'baby'}>Baby</MenuItem>
                            <MenuItem value={'pet'}>Pet</MenuItem>
                            <MenuItem value={'graduate'}>Graduate</MenuItem>
                            <MenuItem value={'product'}>Product</MenuItem>
                            <MenuItem value={'headshot'}>Headshots</MenuItem>
                            <MenuItem value={'general'}>General</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 3 : 2} variant="masonry">
                        {/*//@ts-ignore*/}
                        {photosList.map((item, index) => (
                                    <Grow
                                        in={true}
                                        {...({ timeout: 1000 })}
                                        key={item.title}
                                    >
                                        <ImageListItem key={item.title}>
                                            <img
                                                style={{cursor:'pointer'}}
                                                onClick={() => openImage(index)}
                                                src={`${item.img}`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </Grow>
                                ))}
                    </ImageList>
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