import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cregister', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data);
      // Redirect to login page after 2 seconds if the registration is successful
      setTimeout(() => {
        history.push('/login');
      }, 2000);
      // Reset the form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      // Redirect to login page after error.2 seconds if the email already exists
      if (error.response && error.response.status === 400) {
        const textError = document.getElementById("alert-message");
        textError.style.display = "block";
        textError.style.color = "red";
        setTimeout(() => {
          history.push('/login');
        }, 2500);
      
    }}
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className="client-register">
          <h1>Registration</h1>
          <a class=" btn google-button btn-danger  btn-social btn-google" href="/auth/google" role="button">
            <i class="fab fa-google"></i> Sign In with Google
          </a>
          <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit" name="button">
            Submit
          </button>
          <p id='alert-message'>Hi, seems like you'r already one of our friends!</p>
        </div>
      </form>
    </div>
  );
}

export default CRegister;
