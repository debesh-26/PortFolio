import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formref = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k1tm0yx",
        "template_sgivwu9",
        formref.current,
        "AYgRf5Cosz1QcSIw3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className='contact'>
        <div className="contact-t">Contact me</div>
        <form ref={formref} onSubmit={handleSubmit} className='form'>
            <input type="text" placeholder="Name" name='user_name' className="c-input" />
            <input type="text" placeholder="Email" name='user_email' className="c-input" />
            <input type="text" placeholder="Subject" name='user_subject' className="c-input" />
            <textarea rows="5" placeholder="Message" name='message' className="c-input" />
            <button className="contact-button">Submit</button>
            {done && <span>Thank you...I will contact you soon.</span>}
          </form>
    </div>
  )
}

export default Contact