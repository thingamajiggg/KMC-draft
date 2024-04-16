import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/mail.png'
import mailicon from '../../Assets/email.png'
import phoneIcon from '../../Assets/telephone-call.png'
import locaIcon from '../../Assets/location.png'
import whiteArrow from '../../Assets/whiteArrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b5e32b6b-abd4-4f28-be35-f0e7171a8cdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to reach us </p>
            <ul>
              <li><img src={mailicon} alt="" /> Contact@Wkeong_00</li>
              <li><img src={phoneIcon} alt="" />  +6012345678</li>
              <li><img src={locaIcon} alt="" /> maxim majestic, 56000</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name </label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
