import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';
import { Editor } from "./pages/Editor";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="App">
            <header className="App-header"/>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/editor">
                            <Editor/>
                        </Route>
                    </Switch>
                </Router>
            </main>
        </div>
    );
}

export default App;
