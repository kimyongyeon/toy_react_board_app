import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class CounterInject extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>Mobx + Deco + Inject generator</h1>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        );
    }
}

export default CounterInject;