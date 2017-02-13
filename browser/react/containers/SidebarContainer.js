import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    playlists: state.playlists.list
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

