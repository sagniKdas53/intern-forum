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
//  Component Description : this component serve as the context layer through out the app particularly for AUTHENTICATION DATA


import React from 'react'
import { createContext,useState } from 'react';
export const Authcontextval = createContext()

const Authcontext = ({children}) => {
const [user, setuser] = useState(false)
    const value = {
        user,
        setuser
    
    }

  return (
<Authcontextval.Provider value={value} >
    {
        children
    }
</Authcontextval.Provider>
  )
}

export default Authcontext