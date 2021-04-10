import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';

import logo from './components/pages/logo.png'

import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">

      <div className="logo">
        <img src={logo} alt="Logo"></img>
      </div>

    <div className="main">
      <h1>Understand your customers with QA Interact</h1>
      <h3>Schedule a demo to see how you can improve your customer experience</h3>
    </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" {...register("email", { required: true, minLength: 3 })}/>
      {errors.email && <p>Email is invalid</p>}
      <input type="submit" value="Submit" />
    </form>


    <Button>Test Button</Button>


    </div>

  );
}

export default App;