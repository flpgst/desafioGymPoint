import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '~/pages/SignIn'
import Enrollments from '~/pages/Enrollments'
import NewEnrollment from '~/pages/Enrollments/new'
import EditEnrollment from '~/pages/Enrollments/edit'
import Students from '~/pages/Students'
import NewStudent from '~/pages/Students/new'
import EditStudent from '~/pages/Students/edit'
import Programs from '~/pages/Programs'
import NewProgram from '~/pages/Programs/new'
import EditProgram from '~/pages/Programs/edit'
import Profile from '~/pages/Profile'
import HelpOrder from '~/pages/HelpOrder'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/matriculas" exact component={Enrollments} isPrivate />
      <Route path="/matriculas/novo" component={NewEnrollment} isPrivate />
      <Route path="/matriculas/:id" component={EditEnrollment} isPrivate />
      <Route path="/planos" exact component={Programs} isPrivate />
      <Route path="/planos/novo" component={NewProgram} isPrivate />
      <Route path="/planos/:id" component={EditProgram} isPrivate />
      <Route path="/alunos" exact component={Students} isPrivate />
      <Route path="/alunos/novo" component={NewStudent} isPrivate />
      <Route path="/alunos/:id" component={EditStudent} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
      <Route path="/ajuda/:id" exact component={HelpOrder} isPrivate />
    </Switch>
  )
}
