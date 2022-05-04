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
//  File Description : this file serve as the connection interface to the rest api particularly for the QUESTION ROUTES

import { urls, mode } from './deployment.js'
const address = urls[mode]


export const famousquestion = ({ token }, setcurrentQuestion) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(address + "/api/question/fquest", requestOptions)
    .then(response => response.json())
    .then(result => {
      setcurrentQuestion(result.popular_questions)
    }
    )

    .catch(error => console.log('error', error));
}



export const allquestions = ({ token }, setcurrentQuestions) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(address + "/api/questions/all", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result.questions)
      if (Array.isArray(result.questions)) {
        setcurrentQuestions(result.questions)
      }
      else {
        setcurrentQuestions([{
          question: "Create a Question",
          id: "1",
          authour: "Quried",
          likes: 0,
          dislikes: 0
        }])
      }
    })
    .catch(error => console.log('error', error));
}





export const addquestion = ({ token }, question, setquestionid) => {
  console.log(question)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "question": question
  });


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    // mode : 'no-cors',
    body: raw,
    redirect: 'follow'
  };

  fetch(address + "/api/question/add", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      setquestionid(result.questionid)

    })
    .catch(error => console.log('error', error));
}



export const questionsearch = ({ token }, query, setcurrentQuestions) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "query": query
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(address + "/api/questions/search", requestOptions)
    .then(response => response.json())
    .then(result => {
      setcurrentQuestions(result.results)
    })
    .catch(error => console.log('error', error));

}

export const getrecents = ({ token }, setcurrentQuestions) => {
  var myHeaders = new Headers(); myHeaders.append("Authorization", "Bearer " + token);


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(address + "/api/question/new", requestOptions)
    .then(response => response.json())
    .then(result => {
      setcurrentQuestions(result.results)
      console.log(result)
    })
    .catch(error => console.log('error', error));
}


export const getmyquestions = ({ token }, setcurrentQuestions) => {
  console.log("question called from the connector")

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(address + "/api/question/myquest", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result.results)
      if (result.results) {
        setcurrentQuestions(result.results)
      }
      else {
        console.log(result)
      }

    })
    .catch(error => console.log('error', error));
}

export const questresponse = ({ token }, questionid, response) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "response": response,
    "question_id": questionid
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    // mode : 'no-cors',
    redirect: 'follow'
  };

  fetch(address + "/api/question/res", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.result)


    })
    .catch(error => console.log('error', error));
}


export const questiondelete = ({ token }, questionid) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    questionid: questionid
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(address + "/api/question/delete", requestOptions)
    .then(response => response.text())
    .then(result =>
      console.log(result)
    )
    .catch(error => console.log('error', error));
}