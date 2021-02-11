import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Play from '../spotify/Play'

function Player({spotify}) {
     return (
          <Container style={{maxWidth:'100vw',padding:'0'}}>
               <Grid container spacing={2}>
                    <Grid item xs={12}>
                         <Play spotify={spotify}/> 
                    </Grid>
               </Grid>
          </Container>
     )
}

export default Player
