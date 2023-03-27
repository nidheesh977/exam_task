import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const domain = process.env.REACT_APP_BEDOMAIN

function Admin() {
  const history = useHistory()
  const [exams, setExams] = useState([])
  const [examTitle, setExamTitle] = useState("")
  const [createExam, setCreateExam] = useState(false)
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

  const viewResult = (id) => {
    history.push(`/admin/report/${id}`)
  }

  const changeHandler = (e) => {
    setExamTitle(e.target.value)
  }

  const submitExam = () => {

  }

  return (
    <div>
      <h3>Admin</h3>
      <Link to = "/admin/create-question">
        <button>Add questions</button>
      </Link>
      <h3>ExamList</h3>
      {createExam?
      <>
        <input type = "text" onChange={changeHandler} />
        <button onClick = {submitExam}>Submit</button>
      </>:<button onClick = {()=>setCreateExam(true)}>Add exam</button>
      }
      {exams.map((exam, index) => {
        return(
          <div>
            <h4>{exam.title}</h4>
            <p>Total questions : {exam.no_of_questions}</p>
            <button onClick = {()=>viewResult(exam.id)}>View result</button>
          </div>
        )
      })}
    </div>
  )
}

export default Admin