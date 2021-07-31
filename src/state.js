import React from 'react';
import PropTypes from 'prop-types';

// function component과 다르게 class component는 return을 가지고 있지 않다.
// React.Component로부터 상속받았기 때문에 render method를 구현해야한다.
// react는 자동적으로 class component의 render method를 실행한다.
// function component만 사용하면 되지 왜 class component를 사용하는 것일까?
// -> 우리가 사용하고자 하는 State가 있기 대문에 class component를 사용하는 것이다.
// state는 object이고 component의 data를 넣을 공간이 있고 이 data는 변한다.
// 즉 바뀌는 data를 다루고 싶을 때 state를 사용한다.
// state의 상태를 변결할 때마다 react가 render function을 호출한다.

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // return전까지는 모두 JS code이다.
    state = {
        count: 0
    };

    // add function과 같이 state를 direct하게 바꾸면 react는 render함수를 호출하기 view를 refresh하지 않는다.
    // react가 render function을 호출해 view를 refresh하고 싶으면 setState를 쓴다.
    // add = () => {
    //   this.state.count = 0;
    // };

    // 이렇게 this.state.count로 하는 것보단 아래의 code가 더 낫다.
    // add = () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // };

    // setState는 state object를 매개변수로 받아오기 때문에 current는 this.state가 되어
    // count에 접근할 수 있다.
    // return이 없어서 current => ()소괄호를 사용한다.
    // return이 있으면 아래와 주석 code와 같이 해주면 된다.
    // add = () => {
    //     this.setState(current => {
    //         return {count: current.count + 1}
    //     });
    // };

    add = () => {
        this.setState(current => ({
            count: current.count + 1
        }));
    };

    minus = () => {
        // setState가 호출되어야 render가 호출된다.
        this.setState(current => ({
            count: current.count - 1
        }));
    };

    componentDidMount() {
        console.log("component rendered");
    }

    componentDidUpdate() {
        console.log("I just updated");
    }
    render() {
        console.log("I'm rendering");

        // 아래 모든 코드는 JSX이다. not JS
        return (
            <div>
                <h1>Im a class componenet, state={this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;