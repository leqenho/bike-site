//Dependecies
import React from 'react';

import Logo from '../../../../assets/images/logo.png'

const Contact = () => (
  <section id="contact">
    <div className="container py-5">
      <header className="form-header">
        <img src={Logo} alt="_" />
        <h6>Stay on the saddle!</h6>
      </header>
      <form className="form-inline mx-auto my-4 col col-sm-10 col-md-7 col-lg-6 col-xl-5">
        <div className="form-group m-0">
          <input type="mail" className="form-control" id="btnInput" placeholder="Enter your email..." />
        </div>
          <button className="btn btn-primary">Go</button>
      </form>
    </div>
  </section>
);

export default Contact;
