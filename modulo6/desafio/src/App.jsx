import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filter from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      contacts: [],
      isLoading: false
    }
  }

  componentDidMount() {
      this.setState({isLoading: true});
      fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(response => {
        this.setState({
          contacts: response,
          isLoading: false
        });
      });
  }


  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filter />
        { this.state.isLoading ? (
          <div className="loading__container">
            <div className="loading"> </div>
          </div>
        ) : (
          <Contacts contacts={this.state.contacts}/>
        )}
      </div>
    )
  }
}

export default App;
