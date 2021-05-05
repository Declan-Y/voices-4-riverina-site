import * as React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"


type props = {
  siteTitle?: string
}
const Header = ({ siteTitle}: props) => (
 <header>
           <Link to="/" >
    <StaticImage src="../assets/v4rlogopng.png" alt="Voices 4 Riverina" width={200}/>
</Link>

    <nav id="desktop-nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/OurStory">Our Story</Link></li>
            <li><Link to="/GetInvolved">Get Involved</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
       
    
</nav>
<nav id="mobile-nav">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/our-story.html">Our Story</a></li>
            <li><a href="/get-involved.html">Get Involved</a></li>
            <li><a href="/contact.html">Contact</a></li>
    </ul>
   

</nav>
<img src="assets/hamburger.svg" className="menu" onClick="openNav()"/>

 </header>
)

export default Header
