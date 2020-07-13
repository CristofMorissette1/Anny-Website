import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import './Css/App.css';
import './Css/Header.css';
import './Css/About.css';
import './Css/Contact.css';
import './Css/Home.css';
import './Css/GalleryPage.css';
import './Css/PaintingPage.css';
import './Css/CraftingPage.css';
import './Css/PaintingCrafting.css'
import Header from './Components/Header';
import About from './Components/AboutPage';
import Contact from './Components/ContactUsPage';
import Home from './Components/HomePage';
import Gallery from './Components/GalleryPage';
import Painting from './Components/PaintingPage';
import Crafting from './Components/CraftingPage';
import KidProject from './Components/KidProjectPage';
import PaintingCrafting from './Components/PaintingCraftingPage';

class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (      
       <BrowserRouter>
        <div className="browser_router">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/contact" exact component={ContactUsPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/gallery" exact component={GalleryPage}/>
            <Route path="/painting" exact component={PaintingPage}/>
            <Route path="/painting&crafting" exact component={PaintingCraftingPage}/>
            <Route path="/crafting" exact component={CraftingPage}/>
            <Route path="/kidprojects" exact component={KidProjectPage}/>
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
}

function PaintingCraftingPage() {
  return(
    <div className="paintingCraftingPage">
      <header>
        <Header/>
      </header>
      <div>
        <PaintingCrafting/>
      </div>
    </div>
  )
}

function KidProjectPage() {
  return(
    <div className="KidProjectPage">
      <header>
        <Header/>
      </header>
      <div>
        <KidProject/>
      </div>
    </div>
  )
}

function CraftingPage() {
  return(
    <div className="mainCraftingPage">
      <header>
        <Header/>
      </header>
      <div>
        <Crafting/>
      </div>
    </div>
  )
}

function PaintingPage() {
  return(
    <div className="mainPaintingPage">
      <header>
        <Header/>
      </header>
      <div>
        <Painting/>
      </div>
    </div>
  )
}

function GalleryPage() {
  return(
    <div className="GalleryPage">
      <header>
        <Header/>
      </header>
      <div>
        <Gallery/>
      </div>
    </div>
  )
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
