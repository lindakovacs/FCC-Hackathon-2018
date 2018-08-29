import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to </h1> 
    <h1> 2018 freeCodeCamp JAMstack Hackathon!!!!</h1>
    <h2>October 27-28, 2018 9AM-9PM at GitHub in San Francisco and online </h2>
    <h3>My name is Linda Kovacs </h3>
    <p> I am a Remote Freelancer - Web Developer, Web Designer, and Graphic Designer</p>
    <p>I was always interested in computers and I decided to have a job by programming them. 
      As a designer I taught myself HTML, CSS, and JavaScript but I really learned how to program at FreeCodeCamp. 
      FreeCodeCamp changed my life: I had to invest a lot of my spare time to work thouth the challanges, but it paid off considerably. 
      I think we should all learn to code using FreeCodeCamp platform! </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
