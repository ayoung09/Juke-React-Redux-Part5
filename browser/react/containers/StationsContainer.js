import { connect } from 'react-redux';
import Stations from '../components/Stations';
import React, { Component } from 'react';


function organizeByGenre(songs){
  const stations = {};

  for (let i = 0; i < songs.length; i++){
    if (!stations[songs[i].genre]){
      stations[songs[i].genre] = [songs[i]];
    } else {
      stations[songs[i].genre].push(songs[i]);
    }
  }
  return stations;
}

function mapStateToProps(state){
  return {
    stations: organizeByGenre(state.songs)
  }
}

function mapDispatchToProps(dispatch){
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
