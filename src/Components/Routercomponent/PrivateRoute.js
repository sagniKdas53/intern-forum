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
//  Component Description : this component hide the private routes form the user

import { Navigate } from 'react-router-dom';
import { useContext} from 'react';
import { Authcontextval } from '../Context/Authcontext';

const PrivateRoute = ({ children }) => {
const {user} = useContext(Authcontextval)
if (user){
  return children
}
else{
  <Navigate to="/auth" />
}


  
};

export default PrivateRoute;
