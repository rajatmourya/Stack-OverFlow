import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  // useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();

  const questionList = useSelector(state => state.questionsReducer);
  // console.log(questionList)
  
  // var questionList = [{
  //   _id: 1,
  //   upvotes: 3,
  //   downvotes: 3,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags: ['java','node js','react js','mongo db','express js' ],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answedOn: "jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id: 2,
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags: ['javascript','R','python'],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answedOn: "jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id: 3,
  //   upvotes: 3,
  //   downvotes: 3,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags: ['javascript','R','python'],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answedOn: "jan 2",
  //     userId:2,
  //   }]
  // },]


  
  const checkAuth = () => {
    if( user ===null ){
      alert("login or signup to ask a question")
      navigate('/Auth') 
    }else{
      navigate('./AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === "/"  ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div  >
        {
          questionList.data === null ?
          <h1>Loading...</h1>:
          <>
            <p>{ questionList.data.length } questions </p>
            <QuestionList  questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
