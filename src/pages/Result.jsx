import React from 'react'
import Result from '../components/result'

function Results() {
  const results = [1,2,3,4,5]
  return (
    <div>
        {results.map((item, index) =>{
            return(
                <Result />
            )
        })}
    </div>
  )
}

export default Results