/*
HIGHER ORDER COMPONENT
- a component
- a HOC is a function that takes in a component and returns a component (decorated)







*/

import {connect} from 'react-redux';
import Player from '..........';

import { setProgress, play, /* ... */} from actioncreators;


function mapStateToProps(state/*, own Props*/) {
  return {
    //specify what you want to pass down as props
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
    //these are the props being passed down to Player
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProgress: () => { dispatch(setProgress(progress)) },
    play: () => { dispatch(play()) }
  }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);


// from Player:
// function Player({
//   currentSong,
//   currentSongList,
//   isPlaying,
//   progress,
// }) {
//   return (
//     /* */
//   );
// }
