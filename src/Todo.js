import React, {useEffect, useState} from 'react';
import useFetch from "./useFetch";
import Header from "./Header";

// 훅스 대부분의 기능은 useState, useEffect 2가지 입니다.
const Todo = () => {

    const [todos, setTodos] = useState([]); // 라이프사이클을 돌면서 최적화 함.
    const [newTodo, setNewTodo] = useState();
    const loading = useFetch(setTodos, 'https://yts.mx/api/v2/list_movies.json');

    const uuid = () => {
        return Math.random() * 3000;
    }

    const changeInputData = (e) => {
        // debugger;
        setNewTodo({
            id: uuid(),
            title: e.target.value,
            comYn: false
        });
    }

    useEffect(() => {
        console.log("새로운 내용이 랜더링 됐네요. ");
    }, [todos]) // 지정한 코드를 넘길 수 있다.

    const todoBody = () => {
        // 리스트js 파일로 만들어서 빼야 한다.
        return (
            <ul>
                {todos.map(t => <li key={t.id}>{t.title}</li>)}
            </ul>
        )
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <h1>todo 애플리케이션 </h1>
            <Header todos={todos}/>
            <form action="">
                <input type="text" name="" onChange={changeInputData}/>
                <button onClick={addTodo}>할일추가</button>
            </form>
            {!loading ? todoBody() : <div>Loading...</div>}
        </>
    );
};

export default Todo;