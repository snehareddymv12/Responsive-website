import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png';
import phone from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e9f03c82-313e-4011-bdcb-0e9988ae269c");
  
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
 <>
 <div className="contact" id='contact'>
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>feel free to reach out through contact form or find our contact information below.Your feedback,questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
         <ul>
            <li > <img src={email} alt="" />Sneha@gmail.com</li>
            <li> <img src={phone} alt="" />+ 1 866-605-8960</li>
            <li> <img src={location} alt="" />77 Colony,Btm layout 560890,Bangalore,karnataka</li>
         </ul>
    </div>
    <div className="contact-col">
         <form  onSubmit={onSubmit}>
            <label > Your name</label>
            <input type="text"  name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel"   name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6"  placeholder='Enter your message'required></textarea>
            <button type='submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
         </form>
        <span>{result}</span>
    </div>
 </div>
 </>
  )
}

export default Contact