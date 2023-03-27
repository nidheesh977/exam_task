import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
const domain = process.env.REACT_APP_BEDOMAIN

function Home() {
  const history = useHistory()
  const [pendingExam, setPendingExam] = useState(false)
  useEffect(()=>{
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    if(!localStorage.getItem("access_token")){
      history.push("/login")
    }
    axios.get(`${domain}/get-pending-submit-exam/`, config)
    .then(res => {
      console.log(res
        )
      setPendingExam(true)
    })
    .catch(err => {
      setPendingExam(false)
    })
  }, [])
  return (
    <div>
        <h3>Exam portal</h3>
        <div>
          <Link to = "/exam-list">
            <button>Attend New Exam</button>
          </Link>
          {pendingExam
            ?<Link to = "/exam">
              <button>Continue Exam</button>
            </Link>
            :""
          }
          <Link to = "/results">
            <button>Results</button>
          </Link>
        </div>
    </div>
  )
}

export default Home