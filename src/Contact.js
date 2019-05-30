import React from 'react';
import strings from './data/Contact.str.json';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      valid: false,
      status: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const validEmail = validateEmail(document.getElementById('email').value);
    const validMessage = document.getElementById('message').value.trim().length;
    this.setState({
      [target.name]: target.value,
      valid: validEmail && validMessage
    });
  }

  handleSubmit(event) {
    const form = new FormData(document.getElementById('contact-form'));
    form.delete('name');
    event.persist();
    event.preventDefault();
    if (!this.state.valid) return;
    this.setState({ status: 'sending' }, async () => {
      try {
        const response = await fetch(event.target.action, {
          method: event.target.method,
          headers: {
            Accept: 'application/json'
          },
          body: form
        });
        const responseJson = await response.json();
        console.log('Respuesta del servidor…', responseJson);
        this.setState({
          email: '',
          message: '',
          valid: false,
          status: ( responseJson.status === 'success' ? 'sent' : 'error' )
        });
      } catch (err) {
        console.error(err);
        this.setState({
          email: '',
          message: '',
          valid: false,
          status: 'error'
        });
      }
    });
  }

  renderAlert(status) {
    const str = strings[this.props.lang];
    if (status === 'sent') {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert">
          { str.successMessage }
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => this.setState({ status: null })}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } else if (status === 'error') {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert">
          { str.errorMessage }
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => this.setState({ status: null })}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  }

  render() {
    const str = strings[this.props.lang];
    return (
      <section id="contact" className="border-bottom p-3 bg-light">
        <div className="container">
          <h2 className="text-center my-4">{str.title}</h2>
          { this.renderAlert(this.state.status) }
          <form
            id="contact-form"
            action={process.env.REACT_APP_CONTACT_ENDPOINT}
            method="POST"
            className="mx-auto contact-form"
            onSubmit={this.handleSubmit}
            noValidate>
            <div className="form-group">
              <label htmlFor="email">{str.email}</label>
              <input
                required
                disabled={this.state.status === 'sending'}
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control form-control-lg"
                placeholder="mail@example.com"
              />
            </div>
            <input type="text" name="name" id="name" className="d-none"/>
            <div className="form-group">
              <label htmlFor="message">{str.message}</label>
              <textarea
                required
                disabled={this.state.status === 'sending'}
                name="message"
                id="message"
                value={this.state.message}
                onChange={this.handleChange}
                cols="20"
                rows="5"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group text-right">
              <button
                disabled={!this.state.valid || this.state.status === 'sending'}
                type="submit"
                className="btn btn-lg btn-primary">
                { this.state.status === 'sending' ? str.sending : str.send }
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default Contact;