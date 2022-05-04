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
//  Component Description : this component serve as the context layer through out the app particularly for APPEARANCE (DARKMODE AND LIGHT MODE) DATA

import React from 'react'
import { createContext,useState } from 'react';
export const DMcontextval = createContext()
const DMcontext = ({children}) => {
const [isDark, setisDark] = useState(false)

const value = {
    isDark,
    setisDark

}
return (
<DMcontextval.Provider value={value} >
    {
        children
    }
</DMcontextval.Provider>
  )
}

export default DMcontext