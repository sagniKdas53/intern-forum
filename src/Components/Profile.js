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

// Component Description :  this is the profile page  you can see your questions and also the data like credits no.of. question and total likes 

import "../Stylesheets/Home.css"
import "../Stylesheets/Profile.css"
import Answer from "./Answer";
import Question from "./Question";
import Identifier from "./Identifier";
import Answerbox from "./Answerbox";
import Questionbox from "./Questionbox";
import { useContext ,useState,useEffect } from 'react'
import { OCcontextval } from './Context/OCcontext'
import { DMcontextval } from "./Context/DMcontext";
import { QAcontextval } from "./Context/QAcontext";
import { Authcontextval } from "./Context/Authcontext"
import { getmyquestions } from "./Connector/Questionroutes";
import {getanswers} from "./Connector/Answerroutes"
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'
import {DarkMode,LightMode,HomeOutlined } from "@mui/icons-material"

const Profile = () => {
const {setquestionOC} = useContext(OCcontextval)
const {isDark,setisDark} = useContext(DMcontextval)
const {currentQuestions,setcurrentQuestions,setcurrentAnswers,currentAnswers} = useContext(QAcontextval)
const {user } = useContext(Authcontextval)
const [totalques, settotalques] = useState(0)
const [totallikes, settotallikes] = useState(0)
const [headques, setheadques] = useState({
    question : "Select a Question",
    id : "1",
    authour : "kumar",
    likes : 0,
    dislikes : 0,
    isselected : true
    })

useEffect(() => {
    console.log("question called")
    getmyquestions(user,setcurrentQuestions)
}, [])

useEffect(()=>{
    if(currentQuestions){
    settotalques(currentQuestions.length)
    settotallikes(currentQuestions.reduce(getSum, 0))  
    function getSum(total, val) {
    return total + val.likes;
    }

    }
},[currentQuestions])

const questionclicked = (e,ques) =>{
    setheadques(ques) 
    getanswers(user,ques.id,setcurrentAnswers)

}

return (
<div className={ isDark ? ' profile Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' profile Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>

{/* <button className="btnround" >A</button> */}

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>

<Link to = "/home" >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <HomeOutlined/>
</Avatar>
</Link>


</section>




<section className="faq Cmar-t " >


<div className={isDark ? "userdata Cpad Ccw Cbgc001 Cbrad" : "userdata Cpad Ccb Cbgc005 Cbrad"} >
<Identifier name ={user.username} credit = {user.credit} />

<section className="Cflex Cai-c Cjc-sb Cpad-t">
<div>
<p>Total Quest</p>
<h3 className="Cta-c" >{totalques}</h3>
</div>

<div>
<p>Likes</p>
<h3 className="Cta-c">{totallikes}</h3>
</div>
  
<div>
<p>Credits</p>
<h3 className="Cta-c" >{user.credit}</h3>
</div>

</section>
<section>
{/* <div className="Cflex Cw100p Cjc-sb Cpad-t" >
<p>Change userName</p>
<button className="btnmidedit" >Edit</button>
</div> */}

</section>

{/* 
<section>

</section> */}


</div>

<h2 className="Cpad-tx" >My Questions</h2>

{
  currentQuestions &&  currentQuestions.map((ques) => {
        return(
            <div onClick={(e) =>{questionclicked(e,ques)} } key = {ques.id}>
              <Questionbox questionid={ques.id} author = {ques.author} question= {ques.question} likes = {ques.likes} dislikes = {ques.dislikes} />
            </div>
        )      
    })
}






</section>







{/* question */}





<section className='questans faq Cbrady  Cmar-lx Cflex Cai-c Cf-dir Cmar-t'  >
<Questionbox questionid={headques.id}   question= {headques.question} likes = {headques.likes} isselected = {!(headques.isselected)} dislikes = {headques.dislikes} />

<Answer questionid={headques.id} question = {headques.question}  />



{/* answers */}


{
    currentAnswers.map((ans)=>{
        return(
            <Answerbox answer = {ans.answer} likes={ans.likes} dislikes= {ans.dislikes} isselected = {!(headques.isselected)} username = {ans.username} credits = {ans.credits} />
        )

    })
}



{/* faqs */}




</section>



<Question/>



</div>
)
}

export default Profile