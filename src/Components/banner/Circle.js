import { Box, Grid } from '@mui/material'
import React from 'react'
import Fristcircle from './Fristcircle'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    col_1: {
        display: 'flex  !important',
        justifyContent: 'space-between',
        margin: '79px 0px'
    },
    col_p: {
        color: '2f374b',
        fontSize: '18px'
    },
    col_span: {
        fontWeight: '800',
        fontSize: '25px'
    }
})

const circleArray = [
    {
        image: './a.png'
    },
    {
        image: './b.png'
    },
    {
        image: './c.png'
    },
    {
        image: './d.png'
    },
    {
        image: './e.png'
    },
    {
        image: './f.png'
    },

]



const Circle = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.col_1}>
                <Box>
                    <p className={classes.col_p}>
                        <span className={classes.col_span}>25k</span><br></br> Companies that partner <br></br>with us
                    </p>
                </Box>
                <Grid container>
                    {
                        circleArray.map((item, index) => (
                            <Grid item xs={2} sm={3} md={2} key={index}>
                                <Fristcircle circleprop={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Circle