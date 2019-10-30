import React from 'react'

const ContactForm = ({contacts}) => {
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default class Contacts extends React.Component {
  render() {
    return (
      <ContactForm contacts={this.state.contacts} />
    )
  }

  state = {
    contacts: []
  };

// Assuming the API url is http://jsonplaceholder.typicode.com/users complete componentDidMount
// to display my contacts list.
  componentDidMount() {
  }
}

