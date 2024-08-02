import { Button } from "../components";
import React, { useState } from 'react'; 

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function validateForm(event) {
    event.preventDefault();

    if (email.length === 0) {
      setErrorMessage('Email Address can not be empty');
      return;
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setErrorMessage('Invalid email address');

    }
    else{
      setErrorMessage('');
    }

    // Handle form submission here, e.g., send the email to the server
  }

  return (
    <form onSubmit={validateForm}>
      <section
        id='contact-us'
        className='max-container flex justify-between items-center max-lg:flex-col gap-10'
      >
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
          Sign Up for
          <span className='text-coral-red'> Updates </span>& Newsletter
        </h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type='text' placeholder='subscribe@nike.com' className='input' name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' fullWidth type="submit" />
          </div>
        </div>
      </section>
    </form>
  );
};

export default Subscribe;