import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import LognIn from "./components/pages/LognIn";
import Player from "./components/pages/Player";
import Login from "./components/register/Login";
import { useDataLayerValue } from "./store";
import { getTokenFromUri } from "./utlis/spotify";

const spotify = new SpotifyWebApi();
//stop at 1.14.15
function App() {
  // const [token,setToken]=useState(null);
  const [{
    token,
  }, dispatch] = useDataLayerValue();
  //run code base on condtion
  useEffect(() => {
    const ac = new AbortController();
    //code ..
    const hash = getTokenFromUri();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({type: 'SET_TOKEN',token: _token});
      spotify.getMe().then(user => dispatch({type: 'SET_USER',user})).catch(err => console.log(err));
    }
    spotify.getUserPlaylists().then(response =>dispatch({type: 'SET_PLAYLISTS',playlists:response}));
    spotify.getPlaylist('37i9dQZF1DX5cO1uP1XC1g').then(response=>dispatch({type:'SET_DICOVER_WEEKLY',discover_weekly:response}));
    spotify.getMyTopArtists().then((response) =>dispatch({type: "SET_TOP_ARTISTS",top_artists: response})
  );
    dispatch({type:'SET_SPOTIFY',spotify});
    // return () => {} 
  }, [token, dispatch]);
  
  return (
    <div className="App">
      {token?(<Player spotify={spotify}/>):(<LognIn/>) }
    </div>
  );
}

export default App;
