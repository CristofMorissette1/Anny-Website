import React, { Component } from 'react';
import FbApp from '../Config';


class GalleryPage extends Component() {

    componentDidMount(){
    this.database = FbApp.collection('Gallery')
    .get()
    .then( snapshot => {
        console.log(snapshot)
    })
    .catch(error => console.log(error))
    }


render(){
  return (
    <div className="GalleryPage">
      <h2>This is the Gallery page</h2>
      {console.log(this.database)}
    </div>
  );
}
}

export default GalleryPage;