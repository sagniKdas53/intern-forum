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

// Component Decription : this is search box in the home page is this component



import "./Styles/Searchbox.css"
import { SearchOutlined } from '@mui/icons-material'
import { useContext,useState } from 'react'
import { DMcontextval } from '../Context/DMcontext'
import { QAcontextval } from "../Context/QAcontext";
import { Authcontextval } from "../Context/Authcontext"
import {questionsearch} from "../Connector/Questionroutes"
const Searchbox = () => {
const { isDark } = useContext(DMcontextval)
const { user } = useContext(Authcontextval)
const { setcurrentQuestions } = useContext(QAcontextval)




const debounce = (cb,delay=1500)=>{
  let timeout
  return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          cb(...args)
      }, delay);
  }
}




const updatevalue = debounce(e => {
  questionsearch(user,e.target.value,setcurrentQuestions)
})

return (
    <div className={isDark ? 'search Cbrad Cbgc001 Cflex Cai-c' : 'search Cbrad Cbgc005 Cflex Cai-c'}  >
    <SearchOutlined style={{height : "35px", marginLeft : "10px"}} />
    <input onChange={updatevalue } type="text" placeholder='Search' autoFocus className={isDark ? 'Ccw' : 'Ccb'} /> 
    </div>
  )
}

export default Searchbox