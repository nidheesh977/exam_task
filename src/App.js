import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Results from './pages/Result'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ExamList from './pages/ExamList'
import Exam from './pages/Exam'
import Admin from './pages/admin/Admin'
import Report from './pages/admin/Report'
import CreateQuestion from './pages/admin/CreateQuestion'
import AdminRoute from './AdminRoute'
import UserRoute from './UserRoute'

function App() {
  return (
    <Router>
      <Switch>
        <UserRoute path = "/" exact component={Home} />
        <UserRoute path = "/exam-list" component={ExamList} />
        <UserRoute path = "/exam" component={Exam} />
        <Route path = "/login" component={Login} />
        <Route path = "/register" component={Register} />
        <UserRoute path = "/results" component={Results} />
        <AdminRoute path = "/admin" exact component={Admin} />
        <AdminRoute path = "/admin/create-question" component={CreateQuestion} />
        <AdminRoute path = "/admin/report/:id" component={Report} />
      </Switch>
    </Router>
  )
}

export default App