import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import axios from 'axios'

class ContactUsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      address: '',
      email: '',
      number: '',
      title: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSumbit(e) {
    e.preventDefault();

    const { name, address, email, number, title, message} = this.state;

    const form = await axios.post('api/form', {
      name,
      address,
      email,
      number,
      title,
      message
    })
  }



  render(){
    console.log(this.state)
    return (
      <div className="ContactUsPage">
        <div className="contact_header">
          <p className="contact_header_title">Want to know more – contact me</p>
          <div className="contact_header_text_container">
            <p className="contact_header_text">If you are interested in purchasing a piece of Art or if you have a piece of art you would like made, please feel free to contact me at crisenteme@hotmail.com or feel out the form below and I will contact you as soon as possible!</p>
          </div>
        </div>

        <Form onSubmit={this.handleSumbit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text"
              name="name" 
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input 
              type="text"
              name="Address" 
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input 
              type="email"
              name="email"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="number">Phone Number</Label>
            <Input 
              type="number"
              name="number"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="title">Subject</Label>
            <Input 
              type="text"
              name="title"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input 
              type="textarea"
              name="message"
              onChange={this.handleChange} />
          </FormGroup>

          <Button>Submit</Button>
          </Form>
      </div>
    );
  }
}

export default ContactUsPage;