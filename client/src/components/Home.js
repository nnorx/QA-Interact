import React, { Component} from 'react';
import '../styles/Home.css';

import EmailForm from "./EmailForm";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Phone from "./Phone";


import logo from '../images/logo.png';
import phone from '../images/phone.png';
import check from "../images/check-mark.svg";
import exclamation from "../images/exclamation.svg";
import xmark from "../images/x-mark.svg";

class Home extends Component {
  
  state = {
    logo: {
      alt: "Logo",
      src: logo,
    },
    title: {
      text: "Understand your customers with \nQA Interact"
    },
    description: {
      text:
        "Schedule a demo to see how you can improve your customer experience"
    },
    emailform: {
      placeholder: "Enter Email Address",
      buttonText: "Let's Chat"
    },
    phone: {
      alt: "Phone",
      src: phone,
    },
    notification: {
      src: "",
      alt: "",
      message: "",
      level: "",
      visible: false
    }
  }

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 5200);
    });
  };

  configureNotification = level => {
    const notification = { ...this.state.notification };
    notification.level = level;
    if (level === "success") {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.message = `Thank you for connecting! Please check your email.`;
    } else if (level === "warning") {
      notification.src = exclamation;
      notification.alt = "Exclamation Point";
      notification.message = `The email you entered is already on our mailing list.
                        Thank you for joining the community.`;
    } else {
      notification.src = xmark;
      notification.alt = "X Mark";
      notification.message = `There was an issue with your email submission.
                          Please check your email and try again.`;
    }
    this.setState({ notification });
  };

  render() {
    const {
      logo,
      title,
      description,
      emailform,
      phone,
      notification
    } = this.state;

    return (
      <div className="background">
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description text={description.text} src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible}/>
        <EmailForm placeholder={emailform.placeholder} buttonText={emailform.buttonText} configureNotification={this.configureNotification} showNotification={this.showNotification}/>
        <Phone alt={phone.alt} src={phone.src} />
      </div>
    );
  }
}

export default Home;
