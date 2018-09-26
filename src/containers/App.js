import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    people: state.requestRobots.people,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, isPending, people, error } = this.props;
    const filteredFriendsList = people.filter(person => {
      const fullName = `${person.name.first} ${person.name.last}`;
      return fullName
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    if (isPending) {
      return <h3>Loading...</h3>;
    } else if (error !== '') {
      return <h3>Ooops... {error}</h3>;
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
