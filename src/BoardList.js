import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('board')
@observer
class BoardList extends Component {

    constructor(props) {
        super(props)
        this.handlerList = this.handlerList.bind(this);
        this.handlerWrite = this.handlerWrite.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this);
    }

    handlerList() {
        // 재조회
        alert("리스트")
    }
    handlerWrite() {
        // 페이지 이동
        alert("글쓰기")
    }
    handlerRemove() {
        // 선택항목 삭제
        alert("삭제")
    }

    render() {
        const { board } = this.props;
        const boardList = board.get();

        console.log(boardList);
        boardList.map(b => {
            console.log(b.no)
        })

        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>순번 <input type="checkbox"/></td>
                        <td>제목</td>
                        <td>글쓴이</td>
                        <td>조회수</td>
                    </tr>
                    </thead>
                    <tbody>
                    {boardList.map(b => <tr key={b.no}>
                        <td>{b.no} <input type="checkbox"/></td>
                        <td>{b.title} </td>
                        <td>{b.writer} </td>
                        <td>{b.viewCount} </td>
                    </tr>)}
                    </tbody>
                </table>
                <button onClick={this.handlerRemove}>삭제</button>
            </div>
        );
    }
}

export default BoardList;