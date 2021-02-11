export const intialState={
     user:null,
     playlists:null,
     playing:false,
     item:null,
     //make it null after developing
     // token:"BQDEf3cA5zt802gmfYZuyJ_HcP3YXQYuTQMMpDntqfo5p-KYycPuTw3Z2QBySyZcQbahZHdiQrYPyELHyEqXOnbhuem69K5ALhOWNLofhQSSLhM9Lyg_a3SyJDSFBb5lS5ebB8RLBGDgcsU4O1MhsguhwPjdtUOSFUrihZyZiFTqZCmjYGHP",
     token:null,
     discover_weekly:null,
     soptify:null,
     top_artists:null
}

export const reducer=(state,action)=>{
     console.log(action)
          switch (action.type) {
               case 'SET_USER':
                    return {...state,user:action.user};  
               case 'SET_TOKEN':
                    return {...state,token:action.token}; 
               case 'SET_PLAYLISTS':
                    return{...state,playlists:action.playlists};
               case 'SET_DICOVER_WEEKLY':
                    return{...state,discover_weekly:action.discover_weekly}; 
               case 'SET_SPOTIFY':
                    return{...state,soptify:action.soptify};
               case 'SET_TOP_ARTISTS':
                     return{...state,top_artists:action.top_artists};
               case "SET_ITEM":
                    return {...state,item: action.item};
               case "SET_PLAYING":
                    return {...state,playing: action.playing};           
               default:
                    return state ;
          }
}