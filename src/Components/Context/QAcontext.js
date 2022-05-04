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
//  Component Description : this component serve as the context layer through out the app particularly for CURRENTLY VISIBLE QQUESTION AND ANSWER IN THE UI


import React from 'react'
import { createContext,useState } from 'react';
export const QAcontextval = createContext()


const QAcontext = ({children}) => {

const [currentQuestions, setcurrentQuestions] = useState([{
question : "create a question",
id : "1",
authour : "quried",
likes : 0,
dislikes : 0
}])
// current answer available on screen
const [currentAnswers, setcurrentAnswers] = useState([])
const [liked,setliked] = useState([])
const value = {
    currentQuestions,
    setcurrentQuestions,
    currentAnswers,
    setcurrentAnswers,
    liked,
    setliked
}
return (
<QAcontextval.Provider value={value} >
    {
        children
    }
</QAcontextval.Provider>
  )
}

export default QAcontext
