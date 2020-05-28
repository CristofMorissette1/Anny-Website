import React, { Component } from 'react';
import { Route, Router, BrowserRouter, Switch} from 'react-router-dom';
import './Css/App.css';
import './Css/Header.css';
import Header from './Components/Header';
import About from './Components/AboutPage';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={HomePage}/>
             <Route path="/about" component={AboutPage}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

function AboutPage() {
  return(
    <div className="AboutPage">
      <header>
        <Header/>
      </header>
      <div>
        <About/>
      </div>
    </div>
  )
}

function HomePage() {
  return(
    <div className="App">
      <header>
        <Header/>
      </header>
      <div>
        <p>This is my App component!</p>
      </div>
    </div>
  );
}


export default App
