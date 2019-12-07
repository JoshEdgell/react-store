import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';

import ManagerHome from './components/manager/ManagerHome';

import StoreHome from './components/store/StoreHome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: {
        managerView: true,
        storeView: false
      }
    }
  };

  toggleViews = () => {
    let newDisplay = this.state.display;
    newDisplay.managerView = !this.state.display.managerView;
    newDisplay.storeView = !this.state.display.storeView;
    this.setState({
      display: newDisplay
    })
  }

  render(){
    return(
      <div>
        <Navbar
          managerView={this.state.display.managerView}
          toggleViews={this.toggleViews}
        />
          {this.state.display.managerView ? 
            (
              <ManagerHome/>
            )
          :
            (
              <StoreHome/>
            )
          }
      </div>
    )
    
  }
}

export default App;