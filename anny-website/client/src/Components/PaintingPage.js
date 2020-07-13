import React, { Component } from 'react';
import fire from '../Config';

class PaintingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      paintings: [],
      specificPainting: ''
    }
    this.databaseQuery = this.databaseQuery.bind(this);
  }

  redirectToSpecific = (e) => {
    e.preventDefault();
    let art = JSON.parse(e.target.value)
    this.setState({
      specificPainting: art
    })
  }

  databaseQuery = () => {
    let db = fire.firestore();
    db.collection('PaintingProjects')
    .get()
    .then( snapshot => {
      let paintingData = [];
      snapshot.forEach( doc => {
        const data = doc.data()
        paintingData.push(data);
        this.setState({
          paintings: paintingData,
        })
      })
    })
  }

  componentDidMount(){
    this.databaseQuery()
  }
    

  render(){
    console.log(this.state.specificPainting)
    return (
      <div className="paintingPage">
        {!this.state.specificPainting ? (
          this.state.paintings.map(paintings => {
            return(
              <div className="paintingContainer">
                <img src={paintings.image}></img>
                <p>{paintings.name}</p>
                <button value={JSON.stringify(paintings)} onClick={this.redirectToSpecific}>Learn more</button>
              </div>
            )
          })):
          <div className="specificPainting">
            <p>{this.state.specificPainting.name}</p>
            <img className="specificArt" src={this.state.specificPainting.image}></img>
            <p className="description">{this.state.specificPainting.description}</p>
          </div>
        }
      </div>  
    )
  }
}

export default PaintingPage;