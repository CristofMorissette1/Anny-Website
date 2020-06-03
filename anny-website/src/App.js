import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import './Css/App.css';
import './Css/Header.css';
import './Css/About.css';
import './Css/Contact.css';
import './Css/Home.css';
import Header from './Components/Header';
import About from './Components/AboutPage';
import Contact from './Components/ContactUsPage';
import Home from './Components/HomePage';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div className="browser_router">
            <Switch>
             <Route path="/" exact component={HomePage}/>
             <Route path="/contact" exact component={ContactUsPage}/>
             <Route path="/about" exact component={AboutPage}/>
           </Switch>
        </div> 
      </BrowserRouter>
    )
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

function ContactUsPage() {
  return(
    <div className="ContactUsPage">
      <header>
        <Header/>
      </header>
      <div>
        <Contact/>
      </div>
    </div>
  )
}


function HomePage() {
  return(
    <div className="HomePage">
      <header>
        <Header/>
      </header>
      <div>
        <Home/>
      </div>
    </div>
  );
}


export default App
