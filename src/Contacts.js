import React from 'react'

const ContactForm = ({contacts}) => {
  return (
    <React.Fragment>
      <h1 className="mb-4">Contact List</h1>
      <div className="row">
        {contacts.map((contact, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p className="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
};

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jsonplaceholder.typicode.com/users');
    request.onload = () => {
      this.setState({
        contacts: JSON.parse(request.response)
      });
    };
    request.send();
  }

  render() {
    return (
      <ContactForm contacts={this.state.contacts} />
    )
  }
}
