import { connect } from 'react-redux';
import Station from '../components/Station';
import React, { Component } from 'react';
import { toggleSong } from '../action-creators/player';
import { convertSong } from '../utils';


function findSongsByGenre (songs, genreName) {
  return songs.filter(song => {return song.genre === genreName}).map(convertSong);
}



function mapStateToProps(state, ownProps) {
  return {
    genreName: ownProps.params.genreName,
    songsByGenre: findSongsByGenre(state.songs, ownProps.params.genreName),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: (song, list) => {dispatch(toggleSong(song, list))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
