import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'mobx-react'; // MobX 에서 사용하는 Provider
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.
const counter = new  CounterStore();

ReactDOM.render(
    <Provider counter={counter}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
