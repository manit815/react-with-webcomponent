import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@vaadin/vaadin-date-picker';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   <div>
      //     <vaadin-date-picker label="When were you born?"></vaadin-date-picker>
      //   </div>  
      //   </header>
      //   {/* <body>
      //     Body
      //   </body> */}
      // </div>
      <div className="App">
        <vaadin-date-picker label="When were you born?"></vaadin-date-picker>
      </div>
    );
  }
}

export default App;
