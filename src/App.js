import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import "./App.css";

function App() {
    return (
        <HashRouter>
            {/* 
                /about으로 가면 About.js로 가라!!
                http://localhost:3000/movie_app#/about ->와 같이 쓴다.
                <Route path="/" component={Home} />
                <Route path="/about" component={About} /> 
                하지만 위에 2개를 HashRouter안에 넣게되면, 2개가 동시에 rendering 되므로
                about page로 가게 되면 home과 about page가 둘 다 동시에 rendering되는 문제가 생겨
                아래와 같이 하는 것이 좋다. --> exact 옵션을 true로 준다.
             */}
            {/* <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} /> */}
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;
