import React, { useState } from 'react'

function Exam() {
  const [questions, setQuestions] = useState([
    {
        id: 1,
        question: "Question1",
        optionA: "OptionA",
        optionB: "OptionB",
        optionC: "OptionC",
        optionD: "OptionD",
        answer: ""
    },
    {
        id: 2,
        question: "Question2",
        optionA: "OptionA",
        optionB: "OptionB",
        optionC: "OptionC",
        optionD: "OptionD",
        answer: ""
    },
    {
        id: 3,
        question: "Question3",
        optionA: "OptionA",
        optionB: "OptionB",
        optionC: "OptionC",
        optionD: "OptionD",
        answer: ""
    },
  ])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const submitAnswers = () => {
    alert("Submit answer")
    setCurrentQuestion(0)
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