import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  useEffect(()=>{
    if(!localStorage.getItem("access_token")){
      history.push("/login")
    }
  })
  return (
    <div>
        <h3>Exam portal</h3>
        <div>
          <Link to = "/exam-list">
            <button>Attend New Exam</button>
          </Link>
          <Link to = "/exam">
            <button>Continue Exam</button>
          </Link>
          <Link to = "/results">
            <button>Results</button>
          </Link>
        </div>
    </div>
  )
}

export default Home