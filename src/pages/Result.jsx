import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Result from '../components/result'

const domain = process.env.REACT_APP_BEDOMAIN

function Results() {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  };
  const [results, setResults] = useState([])
  useEffect(()=>{
    axios.get(`${domain}/get-result-user/`, config)
    .then(res => {
      setResults([...res.data])
    })
    .then(err => {
      console.log(err.response)
    })
  }, [])
  return (
    <div>
        <h1>Results</h1>
        {results.map((item, index) =>{
            return(
                <Result result = {item} isAdmin = {false}/>
            )
        })}
    </div>
  )
}

export default Results