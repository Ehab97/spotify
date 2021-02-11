import {  Container, Grid } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/spotify-1.svg'
import { loginUrl } from '../../utlis/spotify'
import './login.css'
function Login() {
     return (
          <Grid>
               <Grid item xs={12}>
                    <div className="login">
                         <img className="login__logo" src={logo} alt="spotfy logo"/>
                         <a href={loginUrl}  className="login__button">Login With Spotify</a>
                    </div>
               </Grid>
          </Grid>
     )
}

export default Login 
