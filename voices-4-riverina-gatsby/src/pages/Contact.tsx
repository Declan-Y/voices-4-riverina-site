import React from "react"
import Layout from "../components/layout"
const Contact = () => {

    return (
        <Layout>
        <section className="content">
        <h1 className="heading">Contact us</h1>
        
             <form className="form" name="contact" method="POST" data-netlify="true">
                 <p>Ready to get involved?</p>
                 <p>Contact us to learn how together we can re-imagine what politics could look 
                     like for the Riverina</p>
                 <input type="text" placeholder="First name" name="first_name"/>
                 <input type="text" placeholder="Last name" name="last_name"/>
                 <input type="text" placeholder="Phone number" name="phone_number"/>
                 <input type="text" placeholder="Post code" name="post_code"/>
                 <input type="text" placeholder="Email" name="email"/>
                 <textarea placeholder="Type your message here" name="message"></textarea>
                 <button type="submit">Submit</button>
             </form>
        </section>
        </Layout>


    )
}

export default Contact