import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const domain = process.env.REACT_APP_BEDOMAIN

function CreateQuestion() {
  const [exams, setExams] = useState([])
  const [questions, setQuestions] = useState([{
    exam: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  }])

  useEffect(()=>{
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios.get(`${domain}/exam/`, config)
    .then(res => {
      setExams(res.data)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [])

  const addForm = () => {
    let tempQuestion = {
        exam: "",
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
    }
    setQuestions([...questions, tempQuestion])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
    };
    console.log(questions)
    axios.post(`${domain}/create-question/`, questions, config)
    .then(res => {
        alert(res.data.message)
    })
    .catch(err => {
        alert(err.response.data.message)
    })
  }

  const changeHandler = (e, index) => {
    let tempQuestions = questions
    tempQuestions[index][e.target.name] = e.target.value
    setQuestions([...tempQuestions])
  }

  const changeExamHandler = (e, index) => {
    console.log(e.target.value)
    let tempQuestions = questions
    tempQuestions[index]["exam"] = e.target.value
    setQuestions([...tempQuestions])
  }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            {questions.map((question, index) => {
                return (
                    <div>
                        <select value = {question.exam} onChange = {(e) => changeExamHandler(e, index)} required>
                            <option value = "">---------</option>
                            {exams.map((exam, examIndex)=>{
                                return (
                                    <option value = {exam.id}>{exam.title}</option>
                                )
                            })}
                        </select>
                        <textarea placeholder='Question' name = "question" value = {question.question} onChange = {(e) => changeHandler(e, index)} required></textarea>
                        <input type = "text" placeholder='Option a' name = "optionA" value = {question.optionA} onChange = {(e) => changeHandler(e, index)} required />
                        <input type = "text" placeholder='Option b' name = "optionB" value = {question.optionB} onChange = {(e) => changeHandler(e, index)} required />
                        <input type = "text" placeholder='Option c' name = "optionC" value = {question.optionC} onChange = {(e) => changeHandler(e, index)} required />
                        <input type = "text" placeholder='Option d' name = "optionD" value = {question.optionD} onChange = {(e) => changeHandler(e, index)} required />
                        <input type = "text" placeholder='Answer' name = "answer" value = {question.answer} onChange = {(e) => changeHandler(e, index)} required />
                    </div>
                )
            })}
            <button type = "button" onClick={addForm}>+</button>
            <input type = "submit" />
        </form>
    </div>
  )
}

export default CreateQuestion