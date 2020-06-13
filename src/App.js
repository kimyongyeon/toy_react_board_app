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
            <br/>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">[목록] </Link>
                            </li>
                            <li className="nav-item"  >
                                <Link  className="nav-link" to="/boardDetail">[글쓰기] </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counter">[카운터1 - mobx 적용] </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counterDeco">[카운터2 - 데코레이션]  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counterInject">[카운터3 - 스토어 + 로직 분리]</Link>
                            </li>
                        </ul>
                    </div>
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
