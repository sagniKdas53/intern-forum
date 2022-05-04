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

// COmponent Decription : this is search box in the home page is this component

import React from 'react'
import Questionbox from './Questionbox'
import Searchbox from "./Accessories/Searchbox"
import { useContext } from 'react'
import { DMcontextval } from "./Context/DMcontext";
import { OCcontextval } from './Context/OCcontext'
import { Avatar } from '@mui/material';
import { SearchOutlined,Person,DarkMode,LightMode } from "@mui/icons-material"

const Search = () => {
const {isDark,setisDark} = useContext(DMcontextval)
const {setquestionOC} = useContext(OCcontextval)

return (



<div className={ isDark ? ' home Cflex Ccw Cjc-c Cbgc002 Ch100vh Cw100p': ' home Cflex Ccb Cjc-c Cbgc003 Ch100vh Cw100p' }>

<section className="navbar Cpad Cflex Cjc-sb " >
<button className="btnmidedit" onClick={() => setquestionOC(prev => !prev)} >Ask Question</button>
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <SearchOutlined/>
</Avatar>

<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>


<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    <Person/>
</Avatar>

</section>




<section className="faq Cmar-lx Cmar-t " >
<div className='Cflex Cjc-sb Cai-c' >

<h1 className="Cmar-ly" >Most Popularaaagagh Question</h1>
<Searchbox/>
<Avatar style = {{height : '15px',width : '15px',backgroundColor : 'rgb(35, 34, 36)'}} >
    <SearchOutlined style = {{height : '15px',width : '15px'}}/>
</Avatar>

</div>

<Questionbox/>



</section>
</div>
  )
}

export default Search