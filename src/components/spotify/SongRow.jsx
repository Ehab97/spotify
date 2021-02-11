import React from 'react'
import './index.css'
function SongRow({track,playsong}) {
     return (
          <div className="songRow">
               <img className="songRow__album" src={track.album.images[0].url} alt="" />
               <div className="songRow__info">
                    <h1>{track.name}</h1>
                    {/* {React.Children.toArray(
                         track.artists.map((artist) => artist.name).join(", ")
                    )} */}
                    {track.artists.map((artist) => artist.name).join(", ")} 
                    -{" "}
                     {track.album.name}
               </div>
          </div>
     )
}

export default SongRow
