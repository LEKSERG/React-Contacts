import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import List from './components/List';
import ContactCard from './components/ContactCard'


class App extends Component {
  state = {
    addNew: false,
    showList: true,
    contactCard: {},
    contacts: [ ],
    new: {
          name: {
              first: '',
              last: ''
          },
          phone: '',
          email: '',
          picture: {
              large: ''
          }
    }
    

  }

  addContact = this.addContact.bind(this);
  removeContact = this.removeContact.bind(this);
  firstNameChange = this.firstNameChange.bind(this);
  lastNameChange = this.lastNameChange.bind(this);
  phoneChange = this.phoneChange.bind(this);
  emailChange = this.emailChange.bind(this);
  showAddForm = this.showAddForm.bind(this);
  showContactCard = this.showContactCard.bind(this);
  toggleView = this.toggleView.bind(this);

  editFirstName = this.editFirstName.bind(this);
  editLastName = this.editLastName.bind(this);
  editPhone=this.editPhone.bind(this);
  editEmail=this.editEmail.bind(this);
  editImage=this.editImage.bind(this);
  imageChange=this.imageChange.bind(this);

  
  componentDidMount () {
    axios.get('https://randomuser.me/api?results=10&inc=name,phone,email,picture')
    .then(response => { 
      this.setState({contacts: response.data.results});
    });
  }
  
  toggleView () {
    this.setState({showList: !this.state.showList});
  }
  showContactCard (contact) {
    this.setState({contactCard: contact, showList: !this.state.showList});
  }
//DELETING
  removeContact(contact) {
    const contacts = this.state.contacts.slice();
    contacts.some((el, index) => {
      if (el === contact) {
        contacts.splice(index, 1);
        return true;
      }
    });
    this.setState({contacts: contacts});
  }
 
//ADDING

  showAddForm() {
    const empty = { name: {
                      first: '',
                      last: ''
                    },
                    phone: '',
                    email: '',
                    picture: {
                      large: ''
                    }
                  }
    this.setState({ addNew: !this.state.addNew, new: empty });
  }

  addContact() {
    if(this.state.new.name.first && this.state.new.phone) {
      const contacts = [...this.state.contacts];
      const empty = { name: {
                          first: '',
                          last: ''
                      },
                      phone: '',
                      email: '',
                      picture: {
                          large: ''
                      }
                    }
      contacts.push(this.state.new);
      this.setState({contacts: contacts, new: empty, addNew: !this.state.addNew});   
    } 
  } 

  firstNameChange (e) {
    const newContact = {...this.state.new};
    const name = {...newContact.name}
    name.first = e.target.value.toLowerCase();
    newContact.name = {...name};
    this.setState({new: newContact});    
  }

  lastNameChange (e) {
    const newContact = {...this.state.new};
    const name = {...newContact.name}
    name.last = e.target.value.toLowerCase();
    newContact.name = {...name};
    this.setState({new: newContact});
  }

  phoneChange (e) {
    console.log(e.target.value);
    const newContact = {...this.state.new};
    newContact.phone = e.target.value.toLowerCase();
    this.setState({new: newContact});
    console.log(this.state.new);
  }

  emailChange (e) {
    console.log(e.target.value);
    const newContact = {...this.state.new};
    newContact.email = e.target.value.toLowerCase();
    this.setState({new: newContact});
    console.log(this.state.new);
  }

  imageChange (event) {
    if (event.target.files && event.target.files[0]) {
      const newContact = {...this.state.new};
      const picture = {...newContact.picture}
      picture.large = URL.createObjectURL(event.target.files[0]);
      newContact.picture = {...picture};
      this.setState({ new: newContact});
    }
   }
//EDITING

  editFirstName(e) {   
    const contactCard = this.state.contactCard;
    contactCard.name.first = e.target.value.toLowerCase();
    this.setState({contactCard: contactCard});
  }

  editLastName(e) {   
    const contactCard = this.state.contactCard;
    contactCard.name.last = e.target.value.toLowerCase();
    this.setState({contactCard: contactCard});
  }

  editPhone(e) {
    const contactCard = this.state.contactCard;
    contactCard.phone = e.target.value.toLowerCase();
    this.setState({contactCard: contactCard});
  }

  editEmail(e) {
    const contactCard = this.state.contactCard;
    contactCard.email = e.target.value.toLowerCase();
    this.setState({contactCard: contactCard});
  }

  editImage (event) {
    if (event.target.files && event.target.files[0]) {
      const contactCard = this.state.contactCard;     
      contactCard.picture.large = URL.createObjectURL(event.target.files[0]);
      this.setState({contactCard: contactCard});
    }
   }

render() {
  return (
    <div className="app">
        <div className='header'>
          <h1>MY CONTACTS </h1>
          <i className="fas fa-list fa-2x"></i>
        </div>
        {this.state.showList
          ?<List 
              contacts={this.state.contacts}
              new={this.state.new}
              delete={this.removeContact}
              showContactCard={this.showContactCard}
              addContact={this.addContact}
              addNew={this.state.addNew} 
              showAddForm={this.showAddForm}
              firstNameChange={this.firstNameChange}
              lastNameChange={this.lastNameChange}
              phoneChange={this.phoneChange}
              emailChange={this.emailChange}
              imageChange={this.imageChange}
            />
          :<ContactCard
              contactCard={this.state.contactCard}
              toggleView={this.toggleView}
              editFirstName={this.editFirstName}
              editLastName={this.editLastName}
              editPhone={this.editPhone}
              editEmail={this.editEmail}
              editImage={this.editImage}
            />
        }
    </div>
  );
}
}
export default App;
