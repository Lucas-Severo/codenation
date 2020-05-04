import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
        <span data-testid="contact-avatar" className="contact__avatar">
        { this.props.contact
          && (<img src={this.props.contact.avatar} alt={this.props.contact.name} />
        )}
        </span>

        <span data-testid="contact-name" className="contact__data">
          { this.props.contact !== undefined && (
            this.props.contact.name
          )}
        </span>

        <span data-testid="contact-phone" className="contact__data">
          { this.props.contact && (
            this.props.contact.phone
          )}
        </span>

        <span data-testid="contact-country" className="contact__data">
          { this.props.contact && (
            this.props.contact.country
          )}
        </span>

        <span data-testid="contact-date" className="contact__data">
          { this.props.contact && (
            (new Date(this.props.contact.admissionDate)).getUTCDate().toString() + "/" +
            ((new Date(this.props.contact.admissionDate)).getUTCMonth()+1).toString() + "/" +
            (new Date(this.props.contact.admissionDate)).getFullYear().toString()
          )}
        </span>

        <span data-testid="contact-company" className="contact__data">
          { this.props.contact && (
            this.props.contact.company
          )}
        </span>

        <span data-testid="contact-department" className="contact__data">
          { this.props.contact && (
            this.props.contact.department
          )}
        </span>
      </article>
    );
  }
}

export default Contact;
