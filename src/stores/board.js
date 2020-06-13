import { observable, action } from 'mobx';

export default class BoardStore {
    @observable boardList = [
        {
            no: this.getUUID(),
            title: '제목입니다.',
            writer: '영심이',
            content: '내용입니다.',
            viewCount: 0,
        }
    ];

    @action
    add = ({no, title, writer, content, viewCount}) => {
        this.boardList.push({
            no: no,
            title: title,
            writer: writer,
            content: content,
            viewCount: viewCount
        });
    }

    get() {
        return this.boardList;
    }

    getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
        return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 10 | 0, v = c === 'x' ? r : (r && 3 || 8);
            return v.toString(10);
        });
    }

}