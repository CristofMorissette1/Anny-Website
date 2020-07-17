import React, { Component } from 'react';
import fire from '../Config';

class AboutPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      profilePic: [],
      deckPic: []
    }
    this.databaseQuery = this.databaseQuery.bind(this);
  }

  databaseQuery() {
      let db = fire.firestore();
      db.collection('Decks')
      .get()
      .then(snapshot => {
          let deckData = [];
          snapshot.forEach( doc => {
            const data = doc.data();
            deckData.push(data);
            this.setState({
                deckPic: deckData
            })
          })
      })
      db.collection('Selfies')
      .get()
      .then(snapshot => {
          let selfieData = [];
          snapshot.forEach( doc => {
              const data = doc.data();
              selfieData.push(data);
              this.setState({
                  profilePic: selfieData
              })
          })
      })
  }

  componentDidMount(){
    this.databaseQuery()
  }

  

  render(){
      console.log(this.deckPic, '1st');
      console.log(this.profilePic, '2nd');
    return (
      <div className="AboutPage_container">
        <p className="about_title"> Meet the Founder: Fabian Amezquita</p>
        <p className="about_description">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br/><br/>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br/><br/>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum.</p>
      </div>
    );
  }
}

export default AboutPage;