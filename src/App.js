
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
      this.state = {
        string: "Hello Eric",
        monsters: [],
        searchField: ''
      };
// Use binding to fix context for 'this' - alternatively use '=>' function
// this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(users => console.log(users));
    .then(users => this.setState( {monsters: users}));
  }

// Use arrow function for lexical scoping of this instead of binding 'this'.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }



  render (){
//  Use destructuring to pull properties off an object and set to them to some constants.
//  Use these constants in building the filter object.

const { monsters, searchField } = this.state;
const filteredMonsters = monsters.filter ( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase() )
);

    return (
          <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox  
              placeholder = 'search monsters' 
              handleChange = { this.handleChange }
            />
          <CardList monsters = {filteredMonsters}>       </CardList>
          {/* <CardList monsters = {this.state.monster}>       </CardList> */}
          </div>
          
        );
  };
};


export default App;
