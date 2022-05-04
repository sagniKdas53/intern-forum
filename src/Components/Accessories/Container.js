// Group Number : GROUP10 
// Topic Of The Project : Forum (quried)
// Mentor - Sunil Kumar Aralimara Channappa 
// Team Members : Siva A - Team leader                         
// Prabu K      
// Joshva A                                             
// Sree Bhavana Kasturi
// Sagnik Das
// Shiva Ganesh M
// Tirupathi Reddy Devagiri
// Neetha Jyothi Simhadri
// Ashwin Mahendra Gawande
// Shruti Govindalwar

// Component Descriptoion : this is just Accesories component which has some prdefined styles to it

import React from 'react'
import "./Styles/Container.css"
const Container = ({children,widthval,heightval,extraclass}) => {
  return (
    <div className= {`container Cbgc001 Cpad Cbrady Cmar-ty Ccw ${extraclass}`}  style={{ width : widthval, height : heightval }} >
      {
        children
      }
    </div>
  )
}

export default Container