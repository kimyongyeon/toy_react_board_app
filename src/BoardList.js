import React, {Component} from 'react';

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

        // context-api 로 빼야 한다.
        const BOARD_LIST = [
            {
                no: 1,
                title: "제목 1",
                writer: "글쓴이 1",
                viewCount: 1
            },
            {
                no: 2,
                title: "제목 2",
                writer: "글쓴이 2",
                viewCount: 2
            },
            {
                no: 3,
                title: "제목 3",
                writer: "글쓴이 3",
                viewCount: 3
            },
        ]

        return (
            <div>
                <table>
                    <tr>
                        <td>순번 <input type="checkbox"/></td>
                        <td>제목</td>
                        <td>글쓴이</td>
                        <td>조회수</td>
                    </tr>
                    {BOARD_LIST.map(b => <tr key={b.no}>
                        <td>{b.no} <input type="checkbox"/></td>
                        <td>{b.title} </td>
                        <td>{b.writer} </td>
                        <td>{b.viewCount} </td>
                    </tr>)}
                </table>
                <button onClick={this.handlerRemove}>삭제</button>
            </div>
        );
    }
}

export default BoardList;