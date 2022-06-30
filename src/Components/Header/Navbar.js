import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
// import Login from '../Login/Login';


const useStyles = makeStyles({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '400',
        fontFamily: 'Roboto',
        gap:'5px'
    },
    login: {
        background: '#319D8E !important',
        color: '#fff !important',
        borderRadius: '10px !important',
        fontSize: '15px !important',
        fontWeight: '400 !important',
        textTransform: 'capitalize!important',
        padding: '9px 27px !important',
    },
    menu: {
        textDecoration: 'none',
        fontSize: '15px',
        padding: '10px 15px',
        color:'#000',
        '&:active': { Color: 'primary.main', }
    }
});

const pages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Courses",
        path: "/Coursess"
    },
    {
        name: "Teachers",
        path: "/Teachers"
    },
    {
        name: "Contact",
        path: "/Contact"
    },
    {
        name: "About",
        path: "/About"
    }
];

function Navbar() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.nav}>
                {
                    pages.map(({ name, path }) => (
                        <Link key={name} to={path} className={classes.menu} >
                            {name}
                        </Link>
                        
                    ))
                }
                <Box>
                    <Button className={classes.login} variant="contained" href="Login">
                        Sign In
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default Navbar