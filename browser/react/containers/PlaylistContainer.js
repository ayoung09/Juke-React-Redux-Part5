import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state) {
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
