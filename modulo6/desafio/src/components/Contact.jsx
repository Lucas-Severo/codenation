import React from 'react';

import { format } from 'date-fns';

class Contact extends React.Component {
  render() {

    const {
      id,
      name,
      avatar,
      company,
      department,
      admissionDate,
      phone,
      country
    } = this.props.data || {};

    return (
      <article className="contact" key={id} data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar">
          <img src={avatar} alt={id}/>
        </span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{format(new Date(admissionDate), 'dd/MM/yyyy')}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>
    );
  }
}

export default Contact;
