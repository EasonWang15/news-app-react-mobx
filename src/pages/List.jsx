import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { observer, inject } from "mobx-react"
import Tabbar from '../components/Tabbar.jsx'
import './List.scss'

@inject('store')
@observer
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: ''
        }
    }
    selectedList(index) {
        this.setState({
            current: index
        })
    }
    renderEmpty() {
        return (
            <div className="empty">
                <p>这里空空如也~</p>
            </div>
        )
    }
    renderList() {
        const { current } = this.state
        const { lists } = this.props.store
        return (
            <div className="list-item">
                <ul>
                    {
                        lists.map((item, index) => {
                            return (
                                <li key={index} className={index === current ? 'active' : ''} onClick={() => this.selectedList(index)}>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                    <p>
                                        {item.createTime}
                                        <Link to={`/Info/${index + 1}`}>查看详情>></Link>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    render() {
        const { lists } = this.props.store
        return (
            <div className="list">
                {
                    lists.length > 0 ? this.renderList() : this.renderEmpty()
                }
            </div>
        )
    }
}

export default Tabbar(List)