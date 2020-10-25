import React from 'react';
import logo from './logo.svg';
import './Components/css/App.css'
import Sidebar from './Components/js/sidebar';
import UserProfile from './Components/js/UserProfile';
import Sidebarmoremenu from './Components/js/Sidebarmore';
import Replies from './Components/js/Replies'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className={"grid-container"}>
                <div className={"item1"}>
                    <Sidebar />
                </div>
                <div className={"item2"}>
                    <Replies></Replies>
                    {/* <Router>
                        <Route path={`/:user`} component={UserProfile} />
                    </Router> */}

                </div>
            </div>
            <Sidebarmoremenu />
        </div>
    );
}

export default App;
