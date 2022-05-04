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

// Component Description :  this show the data of user all over the app

import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';


const StyledBadge = styled(Badge)(({ theme , colorval }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: `${colorval}`,
    color: `${colorval}`,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



const Identifier = ({Styleclass,name= "kumar",credit ="0"}) => {

return (
<div className= {`Cflex Cai-c identifier Cjc-sb ${Styleclass}`} >
<section className='Cflex'>

    <Avatar style={{ height: '35px', width: '35px' }} variant="rounded" /> 

    <div  className="Cmar-ly " >
    <p className=""  >{name}</p>
    <p className="" >{credit}</p>
    </div>
  
</section>


  

</div>
  );
};

export default Identifier;
export {
  StyledBadge
}