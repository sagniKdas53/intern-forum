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

// Component Description :  this component is used to display questions from database   


import React from 'react'
import "../Stylesheets/Home.css"
import { useContext,useState } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { Authcontextval } from './Context/Authcontext';
import { QAcontextval } from './Context/QAcontext';
import {ButtonBase,Snackbar,Alert} from '@mui/material';
import { ArrowUpward,ArrowDownward,Delete } from "@mui/icons-material"
import { questresponse,questiondelete } from './Connector/Questionroutes';
const Questionbox = ({ question="create a question" , likes=0 ,dislikes=0, questionid,isselected,author}) => {
const {setanswerOC} = useContext(OCcontextval)
const {isDark} = useContext(DMcontextval)
const { user } = useContext(Authcontextval)
const {currentQuestions,setcurrentQuestions,liked,setliked} = useContext(QAcontextval)
const [likesval,setlikesval] = useState(likes)

const [msg,setmsg] = useState('')
const [severity, setseverity] = useState('info')
const [opensbar, setopensbar] = useState(false);


const handleclosesbar = () =>{
  setopensbar(false)
}


const likequesfunc = (e) =>{
e.stopPropagation()
questresponse(user,questionid,1)

if(!(liked.includes(questionid))){
  setliked([...liked, questionid])
  setlikesval(prev => prev+1)
}

else{
  setmsg("You have alredy liked this question")
  setseverity("error")
  setopensbar(true)

}


}

const dislikequesfunc = (e) =>{
  e.stopPropagation()
  console.log(liked)
  const newliked = liked.filter((ele) =>{
    return ele !== questionid
  })
  setliked(newliked)
  setlikesval(prev => prev-1)
  console.log("disliked")
  questresponse(user,questionid,0)
}

const openquestionin = (e)=> {
  console.log(questionid)
  setanswerOC(prev => !prev)
}

const questiondeletefunc = (e) =>{
  e.stopPropagation()
  questiondelete(user,questionid)
  const newcurrentQuestions = currentQuestions.filter((ele)=>{
    return ele.id !== questionid
  }) 
  setcurrentQuestions(newcurrentQuestions)
}

return (
    
<div className={ isDark ? 'question Cw100p Cpad Cbgc001 Cc-p Cbrady Cmar-by Cmar-ty' : 'question Cc-p Cw100p Cpad Cbgc005 Cbrady Cmar-by Cmar-ty'} >
<div className='questiontext' >
  <h3>
  {question}
  </h3> 
</div>
{/* <h3 >{question}</h3> */}

<div className="Cflex Cjc-sb" >

<div>
<ButtonBase onClick = {likequesfunc} >
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />

<p>{(likesval>=0) ? likesval : 0}</p>
 
</ButtonBase>

<ButtonBase onClick = {dislikequesfunc} >
<ArrowDownward style={{color: 'red' ,marginLeft : '10px'}} />
{/* <p>{(dislikes>0) ? dislikes : 0}</p> */}
</ButtonBase>
</div>
{
isselected ? 
<button className="btnmidsave Cpad " onClick={openquestionin} > Add Answer</button> : null
}

{

  author && <ButtonBase onClick = {questiondeletefunc} ><Delete sx= {{color : "red"}}/></ButtonBase>

}
</div>


<Snackbar open={opensbar} onClose={handleclosesbar} autoHideDuration={2000} >
        <Alert onClose={handleclosesbar} severity={severity} sx={{ width: '100%' }}>
          {msg}
        </Alert>
</Snackbar>


</div>
  )
}

export default Questionbox
