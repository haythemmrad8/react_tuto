// import logo from './logo.svg';
// import './App.css';
import React, {Component } from 'react';
import Welcome from "./component/welcome";
import Hello from "./component/hello"

class App extends Component {
render(){
  return( 
    <div className="App"> 
    welcom to 1st app
    <Welcome name ="haythem">
      if his happend !!
    </Welcome>
    <Hello name="haythem"/>
    </div>
  );
}
}

export default App;
