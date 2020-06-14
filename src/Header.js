import React from 'react';

// 파라미터를 그냥 받다가 안되서 {}를 넣으니 된다는 사실을 알았다.
const Header = ({todos}) => {
    return (
        <div>
            <h1>Hello todo 애플리케이션</h1>
            <div>해야할일! {todos.length}개가 있습니다.</div>
        </div>
    );
};

export default Header;