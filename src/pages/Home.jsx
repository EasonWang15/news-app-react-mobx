import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Tabbar from '../components/Tabbar.jsx'
import logo from '../assets/logo.svg'

@inject('store')
@observer
class Home extends Component {
    render() {
        const { name } = this.props.store
        return (
            <div className="user">
                <img src={logo} alt={logo} title="" />
                <p>{name}</p>
                <p>欢迎来到首页</p>
            </div>
        )
    }
}

export default Tabbar(Home)