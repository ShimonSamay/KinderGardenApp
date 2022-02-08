import React from "react"
import {Link} from "react-router-dom"


function Routing () {
  return ( 
          <div>
             <Link to="/">Home Page</Link><br></br>
             <Link to="/kid">kid page</Link><br></br>
             <Link to="/teacher">teacher page</Link><br></br>
             <Link to="/parent">parent page</Link><br></br>
          </div>
  ) 
}

export default Routing ;