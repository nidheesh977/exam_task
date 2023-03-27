import React, {useEffect, useState} from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
const domain = process.env.REACT_APP_BEDOMAIN;

const UserRoute = ({component: Component, ...rest}) => {
    let history = useHistory()
    const [isUser, setIsUser] = useState(true)
    let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      };
    useEffect(()=>{
        axios.get(`${domain}/check-user/`, config).then(res=>{
            console.log(res)
        })
        .catch(err => {
            setIsUser(false)
            localStorage.clear()
            history.push("/login")
        })
      },[])
    return (
        <Route {...rest} render={props => (
            !isUser?<Redirect to="/login" />
            :<Component {...props} />
        )} />
    );
};

export default UserRoute;