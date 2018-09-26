import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';

import { setSearchField } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      .then(({ results }) => this.setState({ people: results }));
  }

  render() {
    const filteredFriendsList = this.state.people.filter(person => {
      const fullName = `${person.name.first} ${person.name.last}`;
      return fullName
        .toLocaleLowerCase()
        .includes(this.props.searchField.toLocaleLowerCase());
    });

    if (!this.state.people) {
      return <h3>Loading . . .</h3>;
    } else {
      return (
        <div className="container">
          <h1>Friendster</h1>
          <SearchBox onInputChange={this.props.handleInputChange} />
          <CardList people={filteredFriendsList} />
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
