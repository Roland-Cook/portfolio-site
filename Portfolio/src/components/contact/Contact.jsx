import React from 'react'
import twitterIcon from "../../assets/twitter.png"
import "./contact.scss"


const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">
                Contact Me
            </h1>
            <span className="contactDesc">Fill out this form below to discuss any work opportunities </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className="submitBtn"> Submit </button>
            <div className="links">
                <img src={twitterIcon} alt="LinkedIn" className='link' />
                <img src={twitterIcon} alt="Github" className='link' />
            </div>
            </form>

        </div>
    </section>
  )
}

export default Contact
