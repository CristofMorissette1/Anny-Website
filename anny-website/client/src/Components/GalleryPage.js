import React, { Component } from 'react';
import fire from '../Config';


class GalleryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
    categories: null,
    }
  }

  uuid = () => {
    return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

    componentWillMount(){
    let db = fire.firestore();
    db.collection('Gallery')
    .get()
    .then( snapshot => {
      let categories = [];
      snapshot.forEach( doc => {
        const data = doc.data()
        categories.push(data);
      })
      this.setState({
        categories: categories,
      })
      console.log(this.categories, 'cats')
    })
    .catch(error => console.log(error))
    }


render(){
  return (
    <div className="GalleryPage2">
        <a className="galleryAnchor" href="/painting"><h2 className="galleryTitles">Painting</h2><img src="https://www.vangoghgallery.com/img/starry_night_full.jpg"/></a>
        <a className="galleryAnchor" href="/crafting"><h2 className="galleryTitles">Crafting</h2><img src="https://i.pinimg.com/originals/72/80/f2/7280f24cf1dc82144dd3a9998d0b6989.jpg"/></a>
        <a className="galleryAnchor" href="/kidprojects"><h2 className="galleryTitles">Kid Projects</h2><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDMa7L2vJZuw2_Xmu7GhYr0ivSyNlKf0eLI53NBC5qMuL-9yel&usqp=CAU"/></a>
    </div>
  );
}
}

export default GalleryPage;