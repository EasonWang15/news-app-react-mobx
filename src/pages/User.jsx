import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Tabbar from '../components/Tabbar.jsx'
import logo from '../assets/logo.svg'
import './User.scss'

@inject('store')
@observer
class User extends Component {
    render() {
        const { name } = this.props.store
        return (
            <div className="user">
                <img src={logo} alt={logo} title="" />
                <p>{name}</p>
                <p>欢迎来到个人中心</p>
                <div className="home-btns">
                    <Link className="btn btn-green" to="/add">添加</Link>
                </div>
            </div>
        )
    }
}

export default Tabbar(User)