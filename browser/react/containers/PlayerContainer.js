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
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
