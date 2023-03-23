import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Results from './pages/Result'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ExamList from './pages/ExamList'
import Exam from './pages/Exam'
import Admin from './pages/admin/Admin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/exam-list" component={ExamList} />
        <Route path = "/exam" component={Exam} />
        <Route path = "/login" component={Login} />
        <Route path = "/register" component={Register} />
        <Route path = "/results" component={Results} />
        <Route path = "/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App