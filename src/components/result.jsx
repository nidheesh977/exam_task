import React, { useEffect } from 'react'

function Result(props) {
  return (
    <div>
        <h3>{props.result.exam.title}</h3>
        {props.isAdmin ?<h4>Candidate name: {props.result.user.name}</h4>:""}
        <h4>Total questions: {props.result.total_questions}</h4>
        <h4>Percentage: {(props.result.total_correct_answers/props.result.total_questions)*100}%</h4>
        <p>{props.result.submitted_date}</p>  
    </div>
  )
}

export default Result