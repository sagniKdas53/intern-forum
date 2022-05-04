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
//  Component Description : this component serve as the context layer through out the app particularly for OPEN AND CLOSE OF MODALS IN THE APP 

import React from 'react';
import { createContext,useState } from 'react';
export const OCcontextval = createContext()
const OCcontext = ({children}) => {
const [answerOC, setanswerOC] = useState(false)
const [questionOC, setquestionOC] = useState(false)
const value = {
  answerOC,
  setanswerOC,
  questionOC,
  setquestionOC

}

return (
  <OCcontextval.Provider value={value} >
      {
          children
      }
  </OCcontextval.Provider>
  );
};

export default OCcontext;
