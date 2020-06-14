import React, {useEffect, useState} from 'react';

// 커스텀 훅 만들기
const useFetch = (callback, url) => {

    const [loading, setLoading] = useState(false); // 로딩은 어디서 써먹어야 하나?

    // const fetchInitialData = async () => {
    //     const response = await fetch(url)
    //     const initialData = await response.json();
    //     console.log(initialData);
    // }
    //
    // useEffect(() => {
    //     fetchInitialData();
    // }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(function() {
            console.log("loading...")
            callback([
                {id: 1, title: '제목입니다.1', comYn: false},
                {id: 2, title: '제목입니다.2', comYn: false},
                {id: 3, title: '제목입니다.3', comYn: false},
            ])
            setLoading(false);
        }, 2000)
    }, []) // 빈 배열을 넘기지 않으면 무한루프 돌아서 스택 오버플로우 발생 함.

    useEffect(() => console.log('계속 랜더링 된다.'));

    return loading;
}

export default useFetch;