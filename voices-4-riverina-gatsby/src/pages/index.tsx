import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home"/>
    <div className="hero-container">
    <div className="hero">
        <h1>BIG THINGS CAN HAPPEN</h1>
        <p>When enough people use their collective voice to call for change</p>
    </div>
    </div>
    <section className="content">
        <h1>About</h1>
        <p>The people who started Voices 4 Riverina (V4R) are a group of local residents who live, love and work across the federal electorate of 
            Riverina and are passionate about where we live, why we love being here and mindful of the next ten generations to follow; how will the Riverina look, feel and be for them?</p>
            <p>V4R believe the time has come to 'do politics differently' with the objective of engaging people within our communities on the issues that are important to them; creating
                a collective voice that results in a more meaningful connection between the community and political representation at all levels of government.
            </p>
            <p >
                Our electorate is home to over 155,793 people (2016 Census) and is hugely diverse. It includes 14 local government areas: Bland, Coolamon, Cootamundra, Cowra, Forbes, Gundagai, 
                Harden, Junee, Lockhart, Parkes, Temora, Wagga Wagga, Weddin and Young. Our electorate is also home to the Wiradjuri people, the first inhabitants of this region and have lived 
                here for at least 60,000 years. Traditionally known as the “people of three rivers”, Wiradjuri people have a deep connection to country in a region surrounded by Wambool (Macquarie River), 
                Kalare (Lachlan River) and the Murrumbidjeri (Murrumbidgee River). V4R wishes to acknowledge the Wiradjuri people, traditional custodians of the land on which we all live and pay our respects 
                to their Elders past, present and emerging.
            </p>
    
       <p className="electorate">We are asking you to tell us about the issues that are important to you, in a respectful, small group discussion called A ‘Kitchen Table Conversation’ (KTC).  We welcome the participation of all 
           people living across the 48,988sq km of the Riverina and respect the diversity of different viewpoints and opinions</p>
           <p className="join-us">COME & JOIN US AT A KITCHEN TABLE CONVERSATION BECAUSE WE REALLY WANT TO HEAR WHAT YOU HAVE TO SAY </p> 
           <div className="contact-container"><a href="/contact.html"><p>Contact us</p></a></div>
           <div className="quote-container">
<blockquote>
           <p className="quote">"Democracy is not a spectator sport, it's a participatory event. If we don't participate in it, it ceases to be a democracy"</p>
        </blockquote>
        <p className="attrib">-Michael Moore</p>
    </div>
    </section>
  </Layout>
)

export default IndexPage
