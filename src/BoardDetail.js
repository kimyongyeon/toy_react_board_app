import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('board')
@observer
class BoardDetail extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            no: 0,
            title: '',
            content: '',
            writer: '',
            viewCount: 0
        }
    }

    save() {
        const { board } = this.props;
        board.add({
            no: board.getUUID(),
            title: this.state.title,
            writer: this.state.writer,
            content: this.state.content,
            viewCount: 0

        })
        // board.boardList.map(b => {
        //     let i = JSON.parse(b)
        //     console.log(i.title, i.content, i.writer)
        // })
        console.log(board.boardList)
    }

    handleChange (e, type) {
        console.log(type)
        if (type === 1) {
            this.setState({writer: e.target.value});
        } else if (type === 2) {
            this.setState({title: e.target.value});
        } else {
            this.setState({content: e.target.value});
        }
        // e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>글쓴이</td>
                        <td><input type="text" value={this.state.writer} onChange={e => this.handleChange(e, 1)} /></td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" value={this.state.title} onChange={e => this.handleChange(e, 2)} /></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><input type="text" value={this.state.content} onChange={e => this.handleChange(e, 3)} /></td>
                    </tr>
                    </thead>
                </table>
                <button onClick={this.save}>저장</button>
                <button>수정</button>
                <button>삭제</button>
            </div>
        );
    }
}

export default BoardDetail;