import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OurStory = () => (
  <Layout>
    <Seo title="Our Story" />
    <section className="content">
       <h1 className="heading">Who are we?</h1>
       <p>
        Voices 4 Riverina is an incorporated not-for-profit grass roots community group who have no affiliation with any political party. 
       </p>
       <p>
        Our vision is to encourage and strengthen active participation from the Riverina federal electorate community. A process that aims to
         support and connect people from all walks of life, to have a voice and create a more meaningful connection between the people of the 
         Riverina and local members.  This movement will strive for our “Riverina Family’ to feel genuinely listened to and their views and opinions respected and valued.
       </p>
     <p>The formation of V4R was inspired by the work of Mary Crooks of the Victorian Women’s Trust, and the subsequent work of Voices4Indi and Voices of Warringah. 
     Each of these organisations used the Kitchen Table Conversation (KTC) process as a starting point to engage and inspire their community.</p>
     <p>
        We are now bringing KTCs to the Riverina federal electorate and hope that as many residents as possible will get on board and share their opinions, concerns and ideas. 
        The feedback will go into our report that will be released later this year. This report will be provided to the community and current and future leaders at all levels of government. 
        Personal information will not be publicly released and all feedback is to remain anonymous.
     </p>
     <div className="quote-container">
     <blockquote>
        <p className="quote">"A great big conversation about doing politics differently"</p>
     </blockquote>
     <p className="attrib">-Helen Haines, Member for Indi</p>
    </div>

     <p>
        By creating this new conversation forum for residents we will ensure that our voices are heard and listened to, not just at election time but through 
        ongoing engagement with our political representatives for our region.
     </p>
   </section>
   <section className="content">
       <h2>Our Values</h2>
       <p>The guiding values of V4R that drive our actions and decisions centre around integrity, respect and inclusion.</p> 
       <p className="values">We encourage and welcome participation 
           by all people, irrespective of political allegiance, age, gender, culture or background. Our KTCs provide
           a safe and supportive environment to ensure that everyone feels listened to and heard as we value all views and opinions.</p>
           <p><span>Courage</span> – support people to stand up for what they believe</p>
           <p><span>Diversity</span> – welcomes people from all walks of life</p>
           <p><span>Inclusion</span> – is non partisan and encourages participation by all</p>
           <p><span>Integrity</span> – is ethical, honest, transparent and evidence-based</p>
           <p><span>Respect</span> – values all views, gives due regard and listens to everyone</p>
   </section>
  </Layout>
)

export default OurStory
