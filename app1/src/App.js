// import logo from './logo.svg';
// import './App.css';
import React, {Component } from 'react';
import Welcome from "./component/welcome";
import Hello from "./component/hello"
import Lists from "./component/lists"
import MyFistIf from "./component/conditions"
import LifeCycleExp from "./component/lifeCycleExp"


class App extends Component {
render(){
  return( 
    <div className="App"> 
    welcom to 1st app
    <Welcome name ="haythem">
      if his happend !!
    </Welcome>
    <Hello name="haythem"/>

    <Lists/>
    <MyFistIf/>
    <LifeCycleExp/>
    </div>
  );
}
}

export default App;
