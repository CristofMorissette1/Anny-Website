import { BrowserRouter, Route, NavLink, Router} from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import React from 'react';
import About from './AboutPage';
import Home from '../App';


function Header() {
  return (
    <div className="Header">

      <Link to="/">Home</Link>
      <Link to="/AboutPage">About</Link>
      <Switch>
              <Route component={About} exact path="/AboutPage" />
              <Route component={Home} exact path="/" />
      </Switch>
    </div>
  );
}

// export function AppRouter(){
//   return(
//     <Router>
//     <Route path="/AboutPage" exact component={<About/>}/>
//     <Route path="/" exact component={<Home/>}/>
//     </Router>
//   )
// }


export default Header;
