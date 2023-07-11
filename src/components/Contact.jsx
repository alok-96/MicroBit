import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <form className="form">
      <h2>Contact Us</h2>
        <div>
          <label>Name</label> <br />
          <input type="text" required placeholder="abc" />
        </div>
        <div>
          <label>Email</label> <br />
          <input type="email" required placeholder="abc@gmail.com" />
        </div>
        <div>
          <label>Message</label> <br />
          <input type="text" required placeholder="your query here..." />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
