import React, {useEffect, useState} from 'react';

const BoardHook = () => {
    // 첫번째: 상태값, 두번째: 함수, 자동으로 라이프 사이클을 타는 것이다.
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.!');
        console.log(
            {
                name, nickName
            }
        );
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickName(e.target.value);
    };


    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickName}
                </div>
            </div>
        </div>
    );
};

export default BoardHook;