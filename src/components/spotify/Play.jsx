import { Grid } from '@material-ui/core'
import React from 'react'
import Footer from '../layout/Footer'
import Sidebar from '../layout/Sidebar'
import Body from './Body'
import './index.css'
function Play({spotify}) {
     return (
     <div className="player">
          <Grid container spacing={0}>
               <Grid item md={2} xs={5}>
                    <Sidebar />
               </Grid>
               <Grid item md={10} xs={7}>

                    <Body spotify={spotify} />
               </Grid>
               <Grid item xs={12}>
                    <Footer spotify={spotify} />
               </Grid>
          </Grid>
     </div>
     )
}

export default Play
