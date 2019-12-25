import React from "react";

import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import Sum from "./Sum";
import Subtraction from "./Subtraction";

function App(){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sum">Sum</Link>
                        </li>
                        <li>
                            <Link to="/subtraction">Subtraction</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/sum">
                            <Sum />
                        </Route>
                        <Route path="/subtraction">
                            <Subtraction />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}

function Home() {
    return <div>Home</div>
}

export default App;