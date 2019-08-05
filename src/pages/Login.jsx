import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import './Login.scss'

@inject('store')
@observer
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLog: true,
            logName: "",
            logPsw: "",
            regName: "",
            regPsw: "",
            repeatPsw: ""
        }
    }
    handleLogin = () => {
        const name = window.localStorage.getItem("name")
        const psw = window.localStorage.getItem("psw")
        const { logName, logPsw } = this.state
        const { login } = this.props.store
        if (logName.trim() === "") {
            alert('请输入登录名')
            return false
        }
        if (logPsw === "") {
            alert('请输入密码')
            return false
        }
        if (name !== logName || psw !== logPsw) {
            alert('登录名与密码不一致！')
            return false
        }
        this.setState({
            logName: "",
            logPsw: ""
        })
        login(name)
        this.props.history.push('/home')
    }
    handleReg = () => {
        const { regName, regPsw, repeatPsw } = this.state
        if (regName.trim() === "") {
            alert('请输入登录名')
            return false
        }
        if (regPsw === "") {
            alert('请输入密码')
            return false
        }
        if (repeatPsw === "") {
            alert('请输入确认密码')
            return false
        }
        if (regPsw !== repeatPsw) {
            alert('密码不一致')
            return false
        }
        window.localStorage.setItem("name", regName.trim())
        window.localStorage.setItem("psw", regPsw)
        this.setState({
            isLog: true,
            regName: "",
            regPsw: "",
            repeatPsw: ""
        })
        alert('注册成功！')
    }
    changeInpValue = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    }
    handleEnterLogin = (e) => {
        if (e.keyCode === 13) {
            this.handleLogin()
        }
    }
    renderLogin() {
        return (
            <div className="form-com form-log">
                <h1>欢迎登录</h1>
                <div className="form-row">
                    <label className="form-label">登录名</label>
                    <input className="form-inp" value={this.state.logName} type="text" onChange={this.changeInpValue.bind(this , "logName")}/>
                </div>
                <div className="form-row">
                    <label className="form-label">密码</label>
                    <input className="form-inp" value={this.state.logPsw} type="password" onChange={this.changeInpValue.bind(this , "logPsw")} onKeyUp={this.handleEnterLogin}/>
                </div>
                <div className="form-btns">
                    <button className="btn btn-green" onClick={this.handleLogin}>登录</button>
                    <button className="btn btn-default" onClick={() => this.setState({isLog: false})}>注册</button>
                </div>
            </div>
        )
    }
    renderReg() {
        return (
            <div className="form-com form-reg">
                <h1>请输入以下信息</h1>
                <div className="form-row">
                    <label className="form-label">登录名</label>
                    <input className="form-inp" value={this.state.regName} type="text" onChange={this.changeInpValue.bind(this , "regName")} />
                </div>
                <div className="form-row">
                    <label className="form-label">密码</label>
                    <input className="form-inp" value={this.state.regPsw} type="password" onChange={this.changeInpValue.bind(this , "regPsw")} />
                </div>
                <div className="form-row">
                    <label className="form-label">确认密码</label>
                    <input className="form-inp" value={this.state.repeatPsw} type="password" onChange={this.changeInpValue.bind(this , "repeatPsw")} />
                </div>
                <div className="form-btns">
                    <button className="btn btn-green" onClick={this.handleReg}>确定</button>
                    <button className="btn btn-default" onClick={() => this.setState({isLog: true})}>取消</button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.isLog ? this.renderLogin() : this.renderReg()
                }
            </Fragment>
        )
    }
}

export default login