import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchField: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      .then(({results}) => this.setState({people: results}));
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