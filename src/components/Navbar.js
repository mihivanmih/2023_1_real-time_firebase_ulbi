import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

const Navbar = () => {
    const user = false
    
    return (
        <AppBar position="static" color={"secondary"} >
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {user ? <Button variant={'outlined'}>Выйти</Button>
                    :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
