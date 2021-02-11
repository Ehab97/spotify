import React, { useEffect, useState } from 'react'
import './index.css'
import logo from '../../assets/spotify-1.svg'
import SidebarOption from './SidebarOption'
import { Home, LibraryMusic, Search } from '@material-ui/icons'
import { useDataLayerValue } from '../../store'

function Sidebar() {
     const [{playlists},dispatch]=useDataLayerValue();
     console.log('sidebar',playlists)
     return (
          <div className="sidebar">
               <img className="sidebar__logo" src={logo} alt="soptify logo"/>
               <SidebarOption title="Home" Icon={Home} />
               <SidebarOption title="Search" Icon={Search}  />
               <SidebarOption title="Your Library" Icon={LibraryMusic} />
               <br/>
               <strong className="sidebar_title">playlist</strong>
               <hr/>
               {
                 React.Children.toArray(
                    playlists?.items?.map(playlist=>(<SidebarOption key={playlist.name} title={playlist.name}/>))
                 )   
               }
           </div>
     )
}

export default Sidebar
