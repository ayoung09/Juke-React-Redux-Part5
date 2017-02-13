import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch){
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
