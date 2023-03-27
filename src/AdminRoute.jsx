import React, {useEffect, useState} from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
const domain = process.env.REACT_APP_BEDOMAIN;

const AdminRoute = ({component: Component, ...rest}) => {
    let history = useHistory()
    const [isAdmin, setIsAdmin] = useState(true)
    let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      };
    useEffect(()=>{
        axios.get(`${domain}/check-admin/`, config).then(res=>{
            console.log(res)
        })
        .catch(err => {
            setIsAdmin(false)
            history.push("/")
        })
      },[])
    return (
        <Route {...rest} render={props => (
            !isAdmin?<Redirect to="/" />
            :<Component {...props} />
        )} />
    );
};

export default AdminRoute;