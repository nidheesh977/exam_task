import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import Result from '../../components/result'
const domain = process.env.REACT_APP_BEDOMAIN

function Report() {
  let param = useParams()
  let history = useHistory()
  const [results, setResults] = useState([])
  useEffect(()=>{
    let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
    };
    axios.get(`${domain}/get-result-admin/${param.id}/`, config)
    .then(res => {
        setResults([...res.data])
    })
    .catch(err => {
        if (err.response.status == 401){
            alert(err.response.data.message)
            history.push("/")
        }
    })
  }, [])
  return (
    <div>
        <h1>Results</h1>
        {results.map((item, index) =>{
            return(
                <Result result = {item} isAdmin = {true}/>
            )
        })}
    </div>
  )
}

export default Report