import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import './Info.scss'

@inject('store')
@observer
class Info extends Component {
    render() {
        const index = this.props.match.params.id - 1
        const { title, content } = this.props.store.lists[index]
        return (
            <div className="list-item">
                <h2>{title}</h2>
                <p>{content}</p>
                <button className="btn btn-green" onClick={() => window.history.go(-1)}>返回</button>
            </div>
        )
    }
}

export default Info