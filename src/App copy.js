import React, { Component } from 'react';
// import axios from 'axios';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {

  state = {
      contacts: [
          {
              "name": {
                  "title": "miss",
                  "first": "lola",
                  "last": "dubois"
              },
              "email": "lola.dubois@example.com",
              "phone": "05-40-43-16-87",
              "id": {
                  "name": "INSEE",
                  "value": "2NNaN34254029 04"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/women/82.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "veeti",
                  "last": "manner"
              },
              "email": "veeti.manner@example.com",
              "phone": "07-064-994",
              "id": {
                  "name": "HETU",
                  "value": "NaNNA333undefined"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/28.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "daniel",
                  "last": "pastor"
              },
              "email": "daniel.pastor@example.com",
              "phone": "979-850-154",
              "id": {
                  "name": "DNI",
                  "value": "98791179-I"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/29.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "craig",
                  "last": "hanson"
              },
              "email": "craig.hanson@example.com",
              "phone": "(057)-762-4868",
              "id": {
                  "name": "SSN",
                  "value": "330-50-3783"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/64.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "ondino",
                  "last": "da luz"
              },
              "email": "ondino.daluz@example.com",
              "phone": "(79) 3645-3834",
              "id": {
                  "name": "",
                  "value": null
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/28.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "leonardo",
                  "last": "weller"
              },
              "email": "leonardo.weller@example.com",
              "phone": "0224-1388095",
              "id": {
                  "name": "",
                  "value": null
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/85.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "adrian",
                  "last": "garcia"
              },
              "email": "adrian.garcia@example.com",
              "phone": "906-703-741",
              "id": {
                  "name": "DNI",
                  "value": "43917420-S"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/73.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
              }
          },
          {
              "name": {
                  "title": "mrs",
                  "first": "samirah",
                  "last": "vlasveld"
              },
              "email": "samirah.vlasveld@example.com",
              "phone": "(175)-795-1869",
              "id": {
                  "name": "BSN",
                  "value": "90340159"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/women/13.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
              }
          },
          {
              "name": {
                  "title": "mr",
                  "first": "lachlan",
                  "last": "williams"
              },
              "email": "lachlan.williams@example.com",
              "phone": "(700)-540-6459",
              "id": {
                  "name": "",
                  "value": null
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/men/54.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
              }
          },
          {
              "name": {
                  "title": "mrs",
                  "first": "elsa",
                  "last": "koivisto"
              },
              "email": "elsa.koivisto@example.com",
              "phone": "02-510-300",
              "id": {
                  "name": "HETU",
                  "value": "NaNNA622undefined"
              },
              "picture": {
                  "large": "https://randomuser.me/api/portraits/women/5.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
              }
          }
      ],
      showPerson: false,
      new: true,
      person: {
        name: {
            first: 'Serj',
            last: 'Lek'
        },
        email: '@gg',
        phone: '666',
        picture: {
            large: ''
        }
    }
  }

  componentDidMount () {
      // axios.get('https://randomuser.me/api?results=10&inc=name,phone,email,picture')
      //     .then(response => { 
      //       this.setState({contacts: response.data.results});
      //     });
  }
  changeFirstName () {

  }
  showPersonalCard (index) {
    console.log(index);
    this.setState({ showPerson: !this.state.showPerson });
  }
  onSearch (e) {
    console.log(e.target.value);
    this.setState({search: e.target.value});
}
  render(
    Add=(
      <form onSubmit={this.onSubmit}>
        
        <input 
            type="text" 
            className="form-control" 
            placeholder="First Name"
            value={this.state.person.name.first}
            onChange={this.changeFirstName.bind(this)} />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Last Name"
            name='name.last'
            value={this.state.person.name.last}
            />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Phone"
            name='phone'
            value={this.state.person.phone}
            />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Email"
            name='email'
            value={this.state.person.email}
        />        
        <button 
            className="btn btn-outline-primary" 
            type="submit"
            >ADD
        </button>            
      </form>
    ),
    ContactsList =(
      <div>
      <h1>Contacts Pro</h1>
      <input type='text' className='' placeholder='Enter first or last name' onChange={this.onSearch.bind(this)}/>
      {this.state.new ? Add : null}      
      <ul>
          {this.state.contacts.map((contact, index) => (
              <li key={index} >
              <div onClick={() => this.showPersonalCard(index)}>
              <img src={contact.picture.large} alt='avatar'/>
              <div>
                  <p>{contact.name.first}</p>
                  <p>{contact.name.last}</p>
              </div>
              </div>
              <div>
                  <i className="fas fa-minus-square fa-2x"
                    onClick={(index) => this.state.onDelete(index)}></i>
              </div>            
              </li>                  
          ))}
      </ul>
      </div>
    ),
    Contact=(
      <div>
        This is ContactCard
        <button 
          onClick={(index) => this.showPersonalCard(index)}
        >Go Back</button>
      </div>
    )

  ) {
    return (
      <div>
      {!this.state.showPerson 
        ?ContactsList
        :Contact
      }
      </div>
    )
  }
}

export default App;
