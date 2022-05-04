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

// Component Description : this is used add question to the database 

import Identifier from "./Identifier"
import { useContext,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"
import { QAcontextval } from "./Context/QAcontext"
import { Authcontextval } from "./Context/Authcontext"
import { addquestion } from "./Connector/Questionroutes"
import {Snackbar,Alert} from '@mui/material';

const Question = () => {

  const {questionOC,setquestionOC} = useContext(OCcontextval)
  const {isDark} = useContext(DMcontextval)
  const {currentQuestions,setcurrentQuestions} = useContext(QAcontextval)
  const {user} = useContext(Authcontextval)
  const [data, setdata] = useState('')
  const [questionid,setquestionid] = useState('')

  const [msg,setmsg] = useState('')
  const [severity, setseverity] = useState('error')
  const [opensbar, setopensbar] = useState(false);
  
  const changehandler = (e) =>{
      setdata(e.target.value)
  }
  
  const handleclosesbar = () =>{
      setopensbar(false)
  }
  
  
  
  const validate = () =>{
  if (data.length>5){
  return true
  }

  else{
  setmsg("Question must atleast have 5 characters")
  setseverity("error")
  return false
  }
  }
  
  
  
  const sendData = (e) => {
  e.stopPropagation()

  if (validate()){
    console.log(data)
    addquestion(user, data,setquestionid)
    const newquestion = {
      id:questionid,
      likes: 0,
      question: data,
    }
    setcurrentQuestions([newquestion,...currentQuestions])
    setquestionOC(prev => !prev)
  }
  else{
  setopensbar(true)
  }
    
      
  }


  
    if(!questionOC) return null
    
    else return (
    <div className='Cmodal-c' >
    <div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
    <h4 className="Cta-c" >Ask Your Question </h4>
    <Identifier name = {user.username} credit={user.credit} />

    <textarea autoFocus onChange={changehandler} className={isDark ? "Cw100p Cmar-t Ccw" : "Cw100p Cmar-t "  } name="" id="" cols="30" rows="10"></textarea>
    
    <button className="btnmidcancel " onClick={()=> setquestionOC(prev => !prev)} >Cancel</button>
    
    <button className="btnmidsave Cmar-l" onClick={sendData} >Add Question</button>
    
    </div>


    
<Snackbar open={opensbar} onClose={handleclosesbar} autoHideDuration={2000} >
        <Alert onClose={handleclosesbar} severity={severity} sx={{ width: '100%' }}>
          {msg}
        </Alert>
</Snackbar>

    
    </div>
  )
}

export default Question