import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tabbar.scss'

const tabbarArr = [
    {
        id: '1',
        text: '新闻列表',
        linker: '/list'
    },
    {
        id: '2',
        text: '个人中心',
        linker: '/user'
    }
]

const Tabbar = (ContainerComponent) => class Tabbar extends Component {
    render() {
        const url = window.location.href
        return (
            <div className="wrapper-tabbar">
                <ContainerComponent></ContainerComponent>
                <div className="tab">
                    {
                        tabbarArr.map((item, index) => {
                            return (
                                <Link className={url.indexOf(item.linker) > -1 ? 'active' : ''} to={item.linker} key={item.id}>{item.text}</Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tabbar