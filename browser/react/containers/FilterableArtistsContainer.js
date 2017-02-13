import React from 'react';
import { connect } from 'react-redux';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

import store from '../store';

class FilterableArtistsContainer extends React.Component {

  constructor() {
    super();

    this.state = Object.assign({
      inputValue: ''
      }, store.getState().artists);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

function mapStateToProps(outerState){
  return {};
}

function mapDispatchToProps(dispatch){
  return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer);
