import React, {Component} from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import './css/App.css';
import './css/Home.css'
import './css/Header.css'
import './css/Contact.css'
import './css/About.css'
import Header from './components/Header'
import Home from './components/HomePage'
import About from './components/AboutPage'
import Contact from './components/ContactPage'
import Project from './components/ProjectPage'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="browser_router">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/contact" exact component={ContactUsPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/project" exact component={ProjectPage} />
          </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

function ProjectPage(){
  return(
    <div className="ProjectPage">
      <header>
        <Header/>
      </header>
      <div>
        <Project/>
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

export default App;
