import React, { useEffect } from 'react'

function Result(props) {
  return (
    <div>
        {props.result.candidateName ?<h4>Candidate name: {props.result.candidateName}</h4>:""}
        
        <h4>Total questions: {props.result.totalQuestions}</h4>
        <h4>Correct answers: {props.result.correctAnswers}</h4>
        <h4>Percentage: {props.result.percentage}%</h4>
    </div>
  )
}

export default Result