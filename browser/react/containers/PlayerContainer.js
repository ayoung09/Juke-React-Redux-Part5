import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';

class PlayerContainer extends Component {
  componentDidMount() {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });
  }

  render(){
    return (
      <div>
        <Player props={this.props} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggle: (song, list) => { dispatch(toggleSong(song, list)) },
    prev: () => { dispatch(previous()) },
    next: () => { dispatch(next()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().player;
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {

//     AUDIO.addEventListener('ended', this.next);
//     AUDIO.addEventListener('timeupdate', () => {
//       store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
//     });

//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().player);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   next() {
//     store.dispatch(next());
//   }

//   prev() {
//     store.dispatch(previous());
//   }

//   toggle() {
//     store.dispatch(
//       toggleSong(this.state.currentSong, this.state.currentSongList)
//     );
//   }

//   render() {
//     return <Player
//       {...this.state}
//       next={this.next}
//       prev={this.prev}
//       toggle={this.toggle}
//     />;
//   }

// }
