import React from 'react';

import './App.scss';

import Contacts from './components/Contacts';
import TopBar from './components/Topbar';
import Filters from './components/Filters';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      contacts: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    const getData = async () => {
      let data = await fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts");
      data = await data.json();
      data = data.filter(contact => contact !== undefined);
      this.setState({data: data});
      this.setState({contacts: data});
      this.setState({isLoading: false});
    }
    getData();
  }

  changeData(data) {
    this.setState({contacts: data});
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <TopBar/>
        <Filters data={this.state.data} changeData={this.changeData.bind(this)}/>

        {this.state.isLoading ? <div className="loading">
          <div className="loading__element"></div>
        </div> :
          <Contacts contacts={this.state.contacts}/>
        }
      </div>
    )
  }
}

export default App;
