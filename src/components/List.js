import React, { Component } from 'react';
import styles from './List.module.css'

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount() {
    this.setState({filtered: this.props.contacts});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({filtered: nextProps.contacts});
    }
	
	handleChange(e) {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
        currentList = this.props.contacts;
        newList = currentList.filter(contact => {
            const info = contact.name.first.toLowerCase() + contact.name.last.toLowerCase();
            const searchQuery = e.target.value.toLowerCase();
            return info.includes(searchQuery);
        });
        } else {
        newList = this.props.contacts;
        }
        this.setState({ filtered: newList});
    }
	render(
		ADD =(
			<div className={styles.container}> 
			<section className={styles.add}>
				<div className={styles.imgPicker}>
					<img 
						id="avatar" 
						src={this.props.new.picture.large || 'http://placehold.it/120'} 
						alt="avatar" 
						title='Avatar' 
						width='200px'/>			  
					<input type="file"
						accept="image/png, image/jpeg"
						onChange={this.props.imageChange}
					/>  
				</div>
				<div className={styles.inputs}>       
					<input
						required
						type="text"
						className="input"
						placeholder="* First Name"
						value={this.props.new.name.first}
						onChange={this.props.firstNameChange}
					/>
					<input
						type="text"
						className="input"
						placeholder="Last Name"
						value={this.props.new.name.last}
						onChange={this.props.lastNameChange}
					/>
					<input
						required
						type="text"
						className="input"
						placeholder="* Phone"
						value={this.props.new.phone}
						onChange={this.props.phoneChange}
					/>
					<input
						type="text"
						className="input"
						placeholder="Email"
						value={this.props.new.email}
						onChange={this.props.emailChange}
					/>
				</div>			  
			           
			</section>
			<div className={styles.check} onClick={this.props.addContact}>
				<i className="fas fa-check-square fa-2x"></i>
			</div>
			</div> 
		
		  )
	) {
		return (
			<div>
				<div className={styles.search}>
					<input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
					<span onClick={this.props.showAddForm}>
						{!this.props.addNew 
							?<i className="fas fa-plus-circle fa-2x"></i> 
							:<i className="fas fa-times-circle fa-2x"></i>
						}
					</span>
				</div>
				{this.props.addNew ? ADD : null}	
					<ul >
						{this.state.filtered.map((contact, index) => (
							<li key={index} className={styles.list}>
								<div className={styles.info} onClick={() => this.props.showContactCard(contact)}>
									<img src={contact.picture.large || 'http://placehold.it/120'} alt='avatar' width='128px'/>
									<p>{contact.name.first}</p>
									<p>{contact.name.last}</p>									
									<p>{contact.phone}</p>									
								</div>
								<span onClick={() => this.props.delete(contact)}>
									<i className="fas fa-minus-circle fa-2x"></i>
								</span>
							</li>
						))}
					</ul>
			</div>
		)
	}
}

export default List;