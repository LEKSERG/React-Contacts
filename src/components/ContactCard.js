import React, { Component } from 'react';
import styles from './ContactCard.module.css';

class ContactCard extends Component {
    state={
        onEdit: false
    }
    editContact = this.editContact.bind(this);
    
    editContact () {            
        this.setState({onEdit: !this.state.onEdit})
    }


    render(
        DETAILS=(
            <div className={styles.details}>
                <div className={styles.imgPicker}>
                    <img 
                        src={this.props.contactCard.picture.large || 'http://placehold.it/120'} 
                        alt='avatar' 
                        width='128px'
                    />
                </div>
                <div className={styles.data}>
                    <div>
                        <span><i className="fas fa-user fa-2x"></i></span>
                        <p>{this.props.contactCard.name.first} {this.props.contactCard.name.last}</p>
                    </div>
                    <div>
                        <span><i className="fas fa-mobile fa-2x"></i></span>
                        <p>{this.props.contactCard.phone}</p>
                    </div>
                    <div>
                        <span><i className="fas fa-at fa-2x"></i></span>
                        <p className={styles.email}>{this.props.contactCard.email}</p>
                    </div>
                </div>
            </div>
        ),
        EDIT=(
            <div className={styles.details}>
                <div className={styles.imgPicker}>
                    <img 
                        src={this.props.contactCard.picture.large || 'http://placehold.it/120'} 
                        id="avatar" 
                        alt='avatar' 
                        width='128px'
                    />
                    <input type="file"
                        accept="image/png, image/jpeg"
                        onChange={this.props.editImage}
                    />
                </div>
                <div className={styles.data}>
                    <div>
                        <span><i className="fas fa-user fa-2x"></i></span>
                        <div>
                            <input
                                type="text"
                                className="input"
                                placeholder="First Name"
                                value={this.props.contactCard.name.first}
                                onChange={this.props.editFirstName}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Last Name"
                                value={this.props.contactCard.name.last}
                                onChange={this.props.editLastName}
                            />
                        </div>
                    </div>
                    <div>
                        <span><i className="fas fa-mobile fa-2x"></i></span>
                        <input
                            type="text"
                            className="input"
                            placeholder="Phone"
                            value={this.props.contactCard.phone}
                            onChange={this.props.editPhone}
                        />
                    </div>
                    <div>
                        <span><i className="fas fa-at fa-2x"></i></span>
                        <input
                            type="text"
                            className="input"
                            placeholder="Email"
                            value={this.props.contactCard.email}
                            onChange={this.props.editEmail}
                        />
                    </div>
                </div>
            </div>
        )
    ){
        return (      
            <div className={styles.container}>
                <div>
                    <div className={styles.contorls}>
                        <span onClick={this.props.toggleView}>
                            <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
                        </span>
                        <span onClick={this.editContact}>
                        {this.state.onEdit 
                            ?<i className="fas fa-save fa-2x"></i>
                            :<i className="fas fa-edit fa-2x"></i>
                        }
                        </span>
                    </div>
                    {this.state.onEdit ? EDIT : DETAILS}
                </div> 
            </div>
        )
    }
}
export default ContactCard;