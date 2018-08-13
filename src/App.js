import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {people} from './people';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people,
      searchField: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchField: event.target.value,
    })
  }

  render() {
    const filteredFriendsList = this.state.people.filter(person => {
      const fullName = `${person.name.first} ${person.name.last}`;
      return fullName.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div>
        <h1>Friendster</h1>
        <SearchBox onInputChange={this.handleInputChange}/>
        <CardList people={filteredFriendsList} />
      </div>
    )
  }
}

export default App;