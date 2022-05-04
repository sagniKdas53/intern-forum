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
// Component Description : this component is used to add question to database   

import "../Stylesheets/Answer.css"
import Identifier from "./Identifier"
import { useContext,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext"
import { Authcontextval } from "./Context/Authcontext"
import {QAcontextval} from "./Context/QAcontext"
import { addanswer } from './Connector/Answerroutes';
import {Snackbar,Alert} from '@mui/material';



const Answer = ({questionid,question}) => {
const {answerOC,setanswerOC} = useContext(OCcontextval)
const {isDark} = useContext(DMcontextval)
const {user} = useContext(Authcontextval)
const {setcurrentAnswers,currentAnswers} = useContext(QAcontextval)
const [data, setdata] = useState('')

const [msg,setmsg] = useState('')
const [severity, setseverity] = useState('info')
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
setmsg("Answer must atleast have 5 characters")
setseverity("error")
return false
}
}



const sendData = (e) => {
const newanswer = {
answer: data,
id : "sajkjk",
credits: 29,
username: user.username
}
if (validate()){
setcurrentAnswers([...currentAnswers,newanswer])
e.stopPropagation()
console.log(questionid)
addanswer(user,questionid,data)
setanswerOC(prev => !prev)
}
else{
setopensbar(true)
}
  
    
}



if(!answerOC) return null

else return (
<div className='Cmodal-c' >
<div className={isDark ? 'answer Cbgc001 Cbrady Cpad' : 'answer Cbgc005 Cbrady Cpad'} >
<h4 className="Cta-c" >Put Your Answer</h4>
<Identifier name = {user.username} credits = {user.credit} />
<h3>{question}</h3>

<textarea autoFocus onChange={changehandler} className={isDark ? "Cw100p Cmar-t Ccw" : "Cw100p Cmar-t "  } name="" id="" cols="30" rows="10">

</textarea>

<button className="btnmidcancel Cmar-l " onClick={()=> setanswerOC(prev => !prev)} >Cancel</button>

<button className="btnmidsave Cmar-l" onClick={sendData} >Send</button>

</div>

<Snackbar open={opensbar} onClose={handleclosesbar} autoHideDuration={2000} >
        <Alert onClose={handleclosesbar} severity={severity} sx={{ width: '100%' }}>
          {msg}
        </Alert>
</Snackbar>



</div>
)
}

export default Answer