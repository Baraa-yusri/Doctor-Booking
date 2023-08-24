import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    const { user, logout } = useState(0);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
         
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Booking System
                    </Typography>
                    {
                        user?.email ?
                            <>
                            <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                            <Button onClick={logout} color="inherit">Logout {user.displayName}</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;