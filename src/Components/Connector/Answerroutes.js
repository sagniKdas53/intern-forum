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
//  File Description : this file serve as the connection interface to the rest api particularly for the ANSWER ROUTES
import { urls, mode } from './deployment.js'
const address = urls[mode]

export const addanswer = ({ token }, questionid, answer) => {
  // here the qusetion means qusetion id
  console.log(questionid, answer)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "answer": answer,
    "question": questionid
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(address + "/api/answers/addanswer", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}







export const getanswers = ({ token }, question, setcurrentAnswers) => {
  // here the qusetion means qusetion id
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "question": question
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(address + "/api/answers/getanswers", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.results) {
        setcurrentAnswers(result.results)
        console.log(result.results)
      }
    })
    .catch(error => console.log('error', error));
}

