import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const domain = process.env.REACT_APP_BEDOMAIN

function Exam() {
  const history = useHistory()
  const [questions, setQuestions] = useState([])
  useEffect(()=>{
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios.get(`${domain}/get-pending-submit-exam/`, config).then(res=>{
      let questionsRes = res.data
      let temp_questions = []
      for (var i = 0; i < questionsRes.length; i++){
        temp_questions.push({
          id: questionsRes[i].id,
          question: questionsRes[i].question,
          optionA: questionsRes[i].optionA,
          optionB: questionsRes[i].optionB,
          optionC: questionsRes[i].optionC,
          optionD: questionsRes[i].optionD,
          answer: ""
        })
      }
      setQuestions([...temp_questions]);
    })
    .catch(err => {
      history.push("/exam-list")
    })
  }, [])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const submitAnswers = () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    let answers = []
    for (var i = 0; i < questions.length; i++){
      answers.push({
        id: questions[i].id,
        answer: questions[i].answer
      })
    }
    axios.post(`${domain}/submit-answer/`, answers, config)
    .then(res => {
      alert(`Percentage: ${res.data.percentage}%`)
      history.push("/")
    })
    .catch(err => {
      alert("error")
      console.log(err.response)
    })
  }
  const updateAnswer = (answer) => {
    let tempQuestions = questions
    questions[currentQuestion].answer = answer
    setQuestions([...tempQuestions])
  }
  return (
    <>
      <h3>Exam</h3>
      {questions.length > 0 ?
        <>
            <h4>{questions[currentQuestion].question}</h4>
            <label><input checked = {questions[currentQuestion].answer == "a"} onChange = {()=>updateAnswer("a")} type = "radio" name = "option" /> {questions[currentQuestion].optionA}</label>
            <label><input checked = {questions[currentQuestion].answer == "b"} onChange = {()=>updateAnswer("b")} type = "radio" name = "option" /> {questions[currentQuestion].optionB}</label>
            <br />
            <label><input checked = {questions[currentQuestion].answer == "c"} onChange = {()=>updateAnswer("c")} type = "radio" name = "option" /> {questions[currentQuestion].optionC}</label>
            <label><input checked = {questions[currentQuestion].answer == "d"} onChange = {()=>updateAnswer("d")} type = "radio" name = "option" /> {questions[currentQuestion].optionD}</label>
            <br />
            {currentQuestion>0?<button onClick = {()=>setCurrentQuestion(currentQuestion-1)}>Previous</button>:""}
            {currentQuestion<questions.length-1?<button onClick = {()=>setCurrentQuestion(currentQuestion+1)}>Next</button>:""}
            {currentQuestion==questions.length-1?<button onClick = {submitAnswers}>Submit</button>:""}
        </>
        :""
      }
    </>
  )
}

export default Exam