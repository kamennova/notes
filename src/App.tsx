import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { Editor } from "./pages/Editor";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/editor">
                            <Editor/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
