import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import engage0 from '../photos/engage0.jpeg'
import engage1 from '../photos/engage1.jpeg'
import engage2 from '../photos/engage2.jpeg'
import engage3 from '../photos/engage3.jpeg'
import engage4 from '../photos/engage4.jpeg'
import engage5 from '../photos/engage5.jpeg'
import engage6 from '../photos/engage6.jpeg'
import engage7 from '../photos/engage7.jpeg'
import family0 from '../photos/family0.jpeg'
import family1 from '../photos/family1.jpeg'
import family2 from '../photos/family2.jpeg'
import family3 from '../photos/family3.jpeg'
import family4 from '../photos/family4.jpeg'
import family5 from '../photos/family5.jpeg'
import family6 from '../photos/family6.jpeg'
import family7 from '../photos/family7.jpeg'
import family8 from '../photos/family8.jpeg'
import family9 from '../photos/family9.jpeg'
import family10 from '../photos/family10.jpeg'
import general0 from '../photos/general0.jpeg'
import general1 from '../photos/general1.jpeg'
import general2 from '../photos/general2.jpeg'
import general3 from '../photos/general3.jpeg'
import general4 from '../photos/general4.jpeg'
import general5 from '../photos/general5.jpeg'
import general6 from '../photos/general6.jpeg'
import general7 from '../photos/general7.jpeg'
import graduate0 from '../photos/graduate0.jpeg'
import graduate1 from '../photos/graduate1.jpeg'
import graduate2 from '../photos/graduate2.jpeg'
import graduate3 from '../photos/graduate3.jpeg'
import headshot0 from '../photos/headshot0.jpeg'
import headshot1 from '../photos/headshot1.jpeg'
import portrait0 from '../photos/portrait0.jpeg'
import Grow from '@mui/material/Grow';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const itemData = [
    {
      img: engage0,
      title: 'Engagement0',
        id: 1,
    },
    {
      img: engage1,
      title: 'Engagement1',
        id: 2,
    },
    {
      img: engage2,
      title: 'Engagement2',
        id: 3,
    },
    {
      img: engage3,
      title: 'Engagement3',
        id: 4,
    },
    {
      img: engage4,
      title: 'Engagement4',
        id: 5,
    },
    {
      img: engage5,
      title: 'Engagement5',
        id: 6,
    },
    {
      img: engage6,
      title: 'Engagement6',
        id: 7,
    },
    {
      img: engage7,
      title: 'Engagement7',
        id: 8,
    },
    {
      img: family0,
      title: 'Family0',
        id: 9,
    },
    {
      img: family1,
      title: 'Family1',
        id: 10,
    },
    {
      img: family2,
      title: 'Family2',
        id: 11,
    },
    {
      img: family3,
      title: 'Family3',
        id: 12,
    },
    {
        img: family4,
        title: 'Family4',
        id: 13,
    },
    {
        img: family5,
        title: 'Family5',
        id: 14,
    },
    {
        img: family6,
        title: 'Family6',
        id: 15,
    },
    {
        img: family7,
        title: 'Family7',
        id: 16,
    },
    {
        img: family8,
        title: 'Family8',
        id: 17,
    },
    {
        img: family9,
        title: 'Family9',
        id: 18,
    },
    {
        img: family10,
        title: 'Family10',
        id: 19,
    },
    {
        img: general0,
        title: 'General0',
        id: 20,
    },
    {
        img: general1,
        title: 'General1',
        id: 21,
    },
    {
        img: general2,
        title: 'General2',
        id: 22,
    },
    {
        img: general3,
        title: 'General3',
        id: 23,
    },
    {
        img: general4,
        title: 'General4',
        id: 24,
    },
    {
        img: general5,
        title: 'General5',
        id: 25,
    },{
        img: general6,
        title: 'General6',
        id: 26,
    },{
        img: general7,
        title: 'General7',
        id: 27,
    },{
        img: graduate0,
        title: 'Graduate0',
        id: 28,
    },{
        img: graduate1,
        title: 'Graduate1',
        id: 29,
    },{
        img: graduate2,
        title: 'Graduate2',
        id: 30,
    },{
        img: graduate3,
        title: 'Graduate3',
        id: 31,
    },{
        img: headshot0,
        title: 'Headshot0',
        id: 32,
    },{
        img: headshot1,
        title: 'Headshot1',
        id: 33,
    },{
        img: portrait0,
        title: 'Portrait0',
        id: 34,
    },


  ];

export default function Main() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 3 : 2} variant="masonry">
                        {itemData.map((item) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={item.id}
                            >
                                <ImageListItem key={item.id}>
                                    <img
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
                        <Typography variant='caption' color='text.secondary'>website made by Jacob Brown</Typography>
                    </Paper>
                </Grow>
            </Grid>
      </>
    )
}