import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";

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
                  </ul>
              </nav>

              <Route exact path='/' component={BoardList}/>
              <Route path='/boardDetail' component={BoardDetail}/>
          </div>
      </Router>
  );
}

export default App;
