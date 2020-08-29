import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import NavBar from './components/navbar';
import CssBaseline from '@material-ui/core/CssBaseline';

 class App extends React.Component {
   render(){

  return (
    <div className="app">
      <CssBaseline/>
    <NavBar/>
    </div>
  )
}
 }

export default App;
