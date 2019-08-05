import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import './Add.scss'

@inject('store')
@observer
class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }
    changeTextValue(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }
    addList = () => {
        const { props: { store }, state, state: { title, content } } = this
        if (title.trim() === "") {
            alert("请输入标题！")
            return false;
        }
        if (content.trim() === "") {
            alert("请输入内容！")
            return false;
        }
        store.addList(Object.assign({}, state, {
            createTime: new Date().toLocaleString()
        }))
        this.props.history.push("/list")
    }
    render() {
        const { title, content } = this.state
        return (
            <div className="add">
                <div className="form-row">
                    <div className="form-label">
                        <label>标题</label>
                    </div>
                    <div className="form-inp">
                        <input value={title} type="text" onChange={this.changeTextValue.bind(this, 'title')} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-label">
                        <label>内容</label>
                    </div>
                    <div className="form-inp">
                        <textarea value={content} onChange={this.changeTextValue.bind(this, 'content')}></textarea>
                    </div>
                </div>
                <div className="form-btns">
                    <button className="btn btn-green" onClick={this.addList}>完成</button>
                    <button className="btn btn-default" onClick={() => window.history.go(-1)}>取消</button>
                </div>
            </div>
        )
    }
}

export default Add