import React, { Component } from 'react';
import PropTypes from "prop-types";
import "../styles/EmailForm.css";


class EmailForm extends Component {

    state = {
        email: ""
    }
    
    handleChange = e => {
        this.setState({ email: e.target.value.trim() });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(json => {
                if (json.status === "subscribed") {
                    this.props.configureNotification("success")
                } else if (json.title === "Member Exists") {
                    this.props.configureNotification("warning")
                } else {
                    this.props.configureNotification("danger")
                    //console.log(json);
                }
                this.props.showNotification();
            })
            .catch(err => {
                console.log("error", err);
            });
            
            this.setState({ email: ""});
        }
    }
        
    render() {
        const { placeholder, buttonText } = this.props;
        return (
            <form className="emailForm" onSubmit={this.handleSubmit}>
                <input className="email-field"
                name="email"
                type="email"
                placeholder={placeholder}
                onChange={this.handleChange}
                value={this.state.email}/>
                <button className="email-button"type="submit">{buttonText}</button>
            </form>
        );
    }

}


EmailForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    configureNotification: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
  };

export default EmailForm;