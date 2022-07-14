import React, { Component } from 'react'
import { Link } from "react-router-dom"


export class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>
        Let's use that information to build up a more interesting invoice page. 
        Open up src/data.js and add a new function to lookup invoices by their number:<br/>
        <Link to="/">go to Home</Link><br></br>
        <Link to="/User/locky">locky</Link><br></br>
        <Link to="/User/lovely">lovely</Link>
        </p>
      </div>
    )
  }
}

export default About