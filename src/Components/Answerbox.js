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
// Component Description : this component is used to display answer from database   


import "../Stylesheets/Home.css"
import Identifier from './Identifier'
import { useContext } from 'react'
import {Avatar,ButtonBase} from '@mui/material';
import {ArrowUpward,ArrowDownward} from "@mui/icons-material"
import {DMcontextval} from "./Context/DMcontext";

const Answerbox = ({answer,likes,dislikes,username,credits}) => {
const {isDark,setisDark} = useContext(DMcontextval)

return (
<div className={isDark ? 'answerbox Cw100p Cpad Cbgc001 Cbrady Cmar-by' : 'answerbox Cw100p Cpad Cbgc005 Cbrady Cmar-by'} >
<Identifier name = {username} credit = {credits} />
<div className="answertext " >

{answer}
</div>
{/* 
<div className="Cflex Cmar-t" >
     
<ButtonBase>
<ArrowUpward style={{color: 'rgb(88, 255, 10)'}} />
<p className="Cmar-r">{likes}</p>
</ButtonBase>

<ButtonBase>
<ArrowDownward style={{color: 'red'}} />
<p>{dislikes}</p>
</ButtonBase>

</div> */}
</div>
  )
}

export default Answerbox