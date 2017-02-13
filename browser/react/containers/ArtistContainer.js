import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import { connect } from 'react-redux';

import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps){
  return {
    selectedArtist: state.artists.selected,
    albums: state.artists.selected.albums,
    songs: state.artists.selected.songs,
    player: state.player,
    ownProps: ownProps
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleOne: (song, list) => { dispatch(toggleSong(song, list)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
