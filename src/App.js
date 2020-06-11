import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";
import Counter from "./Counter";
import CounterDeco from "./CounterDeco";
import CounterInject from "./CounterInject";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">목록</Link>
                      </li>
                      <li>
                          <Link to="/boardDetail">글쓰기</Link>
                      </li>
                      <li>
                          <Link to="/counter">카운터1 - mobx 적용 </Link>
                      </li>
                      <li>
                          <Link to="/counterDeco">카운터2 - 데코레이션 </Link>
                      </li>
                      <li>
                          <Link to="/counterInject">카운터3 - 스토어 + 로직 분리</Link>
                      </li>
                  </ul>
              </nav>

              <Route exact path='/' component={BoardList}/>
              <Route path='/boardDetail' component={BoardDetail}/>
              <Route path='/counter' component={Counter}/>
              <Route path='/counterDeco' component={CounterDeco}/>
              <Route path='/counterInject' component={CounterInject}/>
          </div>
      </Router>
  );
}

export default App;
