import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function ExamList() {
  const history = useHistory()
  const [exams, setExams] = useState([
    {title: "Exam1", totalMarks: 100},
    {title: "Exam2", totalMarks: 200},
    {title: "Exam3", totalMarks: 300}
  ])
  const startExam = () => {
    alert("route to exam")
    history.push("/exam")
  }
  return (
    <>
      <h3>ExamList</h3>
      {exams.map((exam, index) => {
        return(
          <div>
            <h4>{exam.title}</h4>
            <p>Total mark : {exam.totalMarks}</p>
            <button onClick = {startExam}>Start</button>
          </div>
        )
      })}
    </>
  )
}

export default ExamList