import React, { useState } from "react";
import emailjs from 'emailjs-com';
// import './App.css';


const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (p) => {
    p.preventDefault();

    const serviceId = 'service_dpznlwe';
    const templateId = 'template_ntdwy3y';
    const publicKey = 'DotPYsgokQO-Agl2R';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Web Wizard',
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>
          Application Form
        </h2>
      </div>

      <div id="form-main">
        <div id="form-div">
          <form class="form" onSubmit={handleSubmit} id="form1">

            <p class="name">
              <input name="name" type="text" value={formData.name} onChange={handleChange} required class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
            </p>

            <p class="email">
              <input name="email" type="text"  value={formData.email} onChange={handleChange} required class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
            </p>

            <p class="text">
              <textarea name="message" value={formData.message} onChange={handleChange} required class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
            </p>


            <div class="submit">
              <input type="submit" value="SEND" id="button-blue" />
              <div class="ease"></div>
            </div>
          </form>
        </div>
        </div>
        {/* <form onSubmit={handleSubmit} className="FormDesign">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="name" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="email" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="message" />
          <button type="submit">Submit</button>
        </form> */}
      </>
      );
}

      export default EmailForm;
