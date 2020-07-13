import React, { Component } from 'react';
import fire from '../Config';

class CraftingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      crafts: [],
      specificCraft: ''
    }
    this.databaseQuery = this.databaseQuery.bind(this);
  }

  redirectToSpecific = (e) => {
    e.preventDefault();
    let art = JSON.parse(e.target.value)
    this.setState({
      specificCraft: art
    })
  }

  databaseQuery = () => {
    let db = fire.firestore();
    db.collection('CraftingProjects')
    .get()
    .then( snapshot => {
      let craftingData = [];
      snapshot.forEach( doc => {
        const data = doc.data()
        craftingData.push(data);
        this.setState({
          crafts: craftingData,
        })
      })
    })
  }

  componentDidMount(){
    this.databaseQuery()
  }

  render(){
    return (
      <div className="craftingPage">
        {!this.state.specificCraft ? (
          this.state.crafts.map(craftings => {
          return(
            <div className="craftingContainer">
              <img src={craftings.image}></img>
              <p>{craftings.name}</p>
              <button value={JSON.stringify(craftings)} onClick={this.redirectToSpecific}>Learn more</button>
            </div>
          )
        })):
        <div className="specificPainting">
            <p>{this.state.specificCraft.name}</p>
            <img className="specificArt" src={this.state.specificCraft.image}></img>
            <p className="description">{this.state.specificCraft.description}</p>
          </div>
      }
      </div>
    )  
  }
}

export default CraftingPage;