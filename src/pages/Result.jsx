import React from 'react'
import Result from '../components/result'

function Results() {
  const results = [
    {
      candidateName: "Nidheesh",
      totalQuestions: 10,
      correctAnswers: 7,
      percentage: 70
    },
    {
      candidateName: "Nidhin",
      totalQuestions: 10,
      correctAnswers: 8,
      percentage: 80
    },
    {
      candidateName: "Nivin",
      totalQuestions: 10,
      correctAnswers: 9,
      percentage: 90
    },
  ]
  return (
    <div>
        {results.map((item, index) =>{
            return(
                <Result result = {item}/>
            )
        })}
    </div>
  )
}

export default Results