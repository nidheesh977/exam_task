import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const domain = process.env.REACT_APP_BEDOMAIN

function ExamList() {
  const history = useHistory()
  const [exams, setExams] = useState([])
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
  const startExam = (id) => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios.post(`${domain}/start-exam/${id}/`, {}, config)
    .then(res => {
      history.push("/exam")
    })
    .catch(err => {
      console.log(err.response)
    })
  }
  return (
    <>
      <h3>ExamList</h3>
      {exams.map((exam, index) => {
        return(
          exam.no_of_questions > 0?
          <div>
            <h4>{exam.title}</h4>
            <p>Total questions : {exam.no_of_questions}</p>
            <button onClick = {()=>startExam(exam.id)}>Start</button>
          </div>
          :""
        )
      })}
    </>
  )
}

export default ExamList