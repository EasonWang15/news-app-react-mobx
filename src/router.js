import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Info from './pages/Info.jsx'
import Login from './pages/Login.jsx'
import Notfind from './pages/Notfind.jsx'

@inject('store')
@observer
class RouterMap extends Component {
    render() {
        const { isLogged } = this.props.store
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={() => (
                        isLogged ? (
                            <Redirect to='/home'></Redirect>
                        ) : (
                            <Redirect to='/login'></Redirect>
                        )
                    )}></Route>
                    <Route path='/home' component={ Home }></Route>
                    <Route path='/list' component={ List }></Route>
                    <Route path='/info/:id' component={ Info }></Route>
                    <Route path='/add' component={ Add }></Route>
                    <Route path='/user' component={ User }></Route>
                    <Route path='/login' component={ Login }></Route>
                    <Route component={ Notfind }></Route>
                </Switch>
            </Router>
        )
    }
}
export default RouterMap