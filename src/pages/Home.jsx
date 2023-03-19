import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h3>Exam portal</h3>
        <div>
            <button>Start Exam</button>
            <button>Continue Exam</button>
            <Link to = "/results">
                <button>Results</button>
            </Link>
        </div>
    </div>
  )
}

export default Home