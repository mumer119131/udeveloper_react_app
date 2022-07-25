import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div class="container contact__portion" id="contact_portion">
            <small>Let's start work on your project</small>
            <h2>Contact</h2>
            <div class="contact__container">
                <form action="">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Message" />
                    
                    <label for="accept"><input type="checkbox" name="accept" id="accept" /> Accept User Agrements</label><br />
                    <input type="submit" value="SEND" />
                </form>
            </div>

        </div>
  )
}

export default Contact