// Group Number : GROUP10 
// Topic Of The Project : Forum
// Group Number : GROUP10 
// Mentor - Sunil Kumar Aralimara Channappa 
// Topic Of The Project : Forum (quried)
// Team Members : 
// Siva A                        
// Prabu K      
// Joshva A                                             
// Sree Bhavana Kasturi
// Sagnik Das
// Shiva Ganesh M
// Tirupathi Reddy Devagiri
// Neetha Jyothi Simhadri
// Ashwin Mahendra Gawande
// Shruti Govindalwar

// component description : this the root of all component which governs all the routes and states


import './App.css';
import "./Stylesheets/Cstyle/Colors.css"
import "./Stylesheets/Cstyle/Flexbox.css"
import "./Stylesheets/Cstyle/Hw.css"
import "./Stylesheets/Cstyle/Marpad.css"
import "./Stylesheets/Cstyle/Bradius.css"
import "./Stylesheets/Cstyle/Button.css"
import "./Stylesheets/Cstyle/Modal.css"
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import PrivateRoute from "./Components/Routercomponent/PrivateRoute"
import OCcontext from './Components/Context/OCcontext';
import DMcontext from './Components/Context/DMcontext';
import QAcontext from './Components/Context/QAcontext';
import Authcontext from './Components/Context/Authcontext';
import Home from './Components/Home'
import Login from './Components/Login';
import Search from './Components/Search';
import Profile from './Components/Profile'

function App() {
return (
<div>
<Authcontext>
<QAcontext>
<DMcontext>

<OCcontext>
<Router>

<Routes>
{/* login route  */}
<Route exact path="/" element = {<Login/>} />
  
{/* home route  */}
<Route exact path="/home" element = {
<PrivateRoute>
<Home/>
</PrivateRoute>
}/>

{/* 
<Route exact path="/search" element = {
<PrivateRoute>
<Search/>
</PrivateRoute>
}/> */}


    
<Route exact path="/profile" element = {
<PrivateRoute>
<Profile/>
</PrivateRoute>
}/>


</Routes>

</Router>


</OCcontext>
</DMcontext>
</QAcontext>
</Authcontext>
</div>
);
}

export default App;
