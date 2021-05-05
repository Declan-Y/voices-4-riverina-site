import React from "react"
const Footer = () => {


return (
<footer>
© {new Date().getFullYear()}, Built with
{` `}
<a href="https://www.gatsbyjs.com">Gatsby</a>
<div>
        <a href="https://www.facebook.com/Voices4Riverina" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-square"></i>
</a>

<a href="https://www.instagram.com/voices4riverina/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
</a>
<a href="https://twitter.com/voices4riverina" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
</a>
</div>

    <p>In the spirit of reconciliation Voices 4 Riverina acknowledges the Traditional Custodians of country throughout the Riverina and Australia and their connections to land, sea and community. 
    We pay our respect to their elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.</p>
</footer>
)

}

export default Footer