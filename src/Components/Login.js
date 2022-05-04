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

// Component Description :  this is login page which is also the sign in page base on the state of the "islogin state in this component" 

import "../Stylesheets/Login.css"
import { useState } from "react"
import { useContext } from "react"
import {DMcontextval} from "./Context/DMcontext";
import { Authcontextval } from './Context/Authcontext';
import {Avatar,Snackbar,Alert} from '@mui/material';
import {DarkMode,LightMode} from "@mui/icons-material"
import {login,register} from "./Connector/Authroutes"
import { useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate()
const {isDark,setisDark} = useContext(DMcontextval)
const {setuser} = useContext(Authcontextval)
const [islogin, setislogin] = useState(true)
const [isloading, setisloading] = useState(false)
const [data, setdata] = useState({})
const [msg,setmsg] = useState('')
const [severity, setseverity] = useState('info')
const [opensbar, setopensbar] = useState(false);

const validate = () => {
if(data.email && data.username && data.password && data.Cpassword){

    
    if(data.password.length > 7){
        if(data.password === data.Cpassword ){
            return true
        }
        
        else{
            setmsg("Confirm passwords didn’t match. Try again.")
    setseverity("error")
    return false
}
}

else{
    setmsg("Your password must be at least 8 characters long")
    setseverity("error")
    return false
}
}

else{
    setmsg("Input fields should not be empty")
    setseverity("error")
    return false
}

}

const changehandler = (e) =>{
    setdata({...data, [e.target.name] : e.target.value})
}

const handleclosesbar = () =>{
    setopensbar(false)
}


const loginfunc = (e) => {
    login(data,setuser)  
    .then(response => response.json())
    .then(result =>  {
        if(result.errmsg){
            setseverity("error")
            setmsg(result.errmsg)
            setopensbar(true)
        }
        else{
            setuser(result)
            navigate("/home")
            setseverity("success")
            setmsg("Logged in sucessfully")
            setopensbar(true)
            
        }

    
    })
    .catch(error => console.log('error', error));
    
}


const registerfunc = async (e) =>{
if(validate()){
    setisloading(true)
    register(data,setuser).then(response => response.json())
    .then(result => {
     if(result.email === "the email has been already registered")
     {
        setseverity("error")
        setmsg("The email has been already registered")
        setisloading(false)
        setopensbar(true)

     }
    else{
        setseverity("success")
        setmsg("Signedup in sucessfully")
        setisloading(false)
        setopensbar(true)
        setislogin(true)
    }
    })
    .catch(error => console.log('error', error));
    // setseverity("success")
    // setmsg("signedup in sucessfully")
    // setisloading(false)
    // setopensbar(true)
    // setislogin(true)
    
}
else{
    setopensbar(true)
}


}

return (
<div className={isDark ? 'login Ch100vh Cflex Cai-c Cjc-c Ccw Cbgc002 ' : 'login Ch100vh Cflex Cai-c Ccb Cjc-c Cbgc003 '} >

{/* navbar */}

<section className="navbarlogin Cpad Cflex Cjc-sb " >


<div onClick={() => setisDark(prev => !prev) } >
<Avatar style = {{backgroundColor : 'rgb(35, 34, 36)'}} >
    {isDark ? <LightMode/> : <DarkMode/>}
</Avatar>
</div>


</section>

<section className={isDark ? "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc001 Cai-c" : "loginbox Cflex Cf-dir Cjc-sb Cpad Cbrad Cbgc005 Cai-c "} >
<Avatar style = {{width : '50px',height : '50px'}} />


<h2>{islogin? "Login" : "Signup"}</h2>

<div className="Cmar-ty" >
{(!islogin) && <div className="note Cpad Cta-c Cbrady Cmar-by" >
    <p>
    NOTE : This Forum is to raise questions regarding wipro internship.
    </p>
</div>
}

<input type="text" name="email" placeholder="Enter Email" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw " : "Cbrady Cbgc003 Ccb"}/>
{
!islogin ? 
<input type="text" name="username" placeholder="Enter UserName" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}

<input type="password" name="password" placeholder="Enter Password" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />

{
!islogin ? 
<input type="password" name="Cpassword" placeholder="Confirm Password" onChange={changehandler} className={isDark ? "Cbrady Cbgc002 Ccw Cmar-t" : "Cbrady Cbgc003 Ccb Cmar-t"} />
: null
}

</div>
{islogin ?  <button className="btnmidsave" onClick = {loginfunc} > Login </button> : <button onClick={registerfunc} disabled={isloading}  className="btnmidsave Cmar-tx Cmar-bx"  > Sign Up</button> }

<p>Don't Have a Account <span className={isDark ? "link Cc-p" : "link2 Cc-p"} href="#" onClick={() => setislogin(prev => !prev)} >{!islogin ? "login" : "sign Up"}</span></p>

</section>

<Snackbar open={opensbar} onClose={handleclosesbar} autoHideDuration={2000} >
        <Alert onClose={handleclosesbar} severity={severity} sx={{ width: '100%' }}>
              <p>{msg}</p>
        </Alert>
</Snackbar>




</div>
)

}

export default Login