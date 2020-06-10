import React, {Component} from 'react';

class BoardDetail extends Component {

    constructor(props) {
        super(props);
        this.writer = props.writer
        this.title = props.title
        this.content = props.content
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>글쓴이</td>
                        <td><input type="text" value={this.writer}/></td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" value={this.title}/></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><input type="text" value={this.content}/></td>
                    </tr>
                </table>
                <button>저장</button>
                <button>수정</button>
                <button>삭제</button>
            </div>
        );
    }
}

export default BoardDetail;