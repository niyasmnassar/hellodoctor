import React from 'react';
import logo from './logo.svg';
import './App.css';
import signIn from "./components/signIn";
import signUp from "./components/signup";
import Home from "./components/home";
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/signup" component={signUp} />
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={signIn}
            path="/signin"
            exact
          />
          <PrivateRoute component={Home} path="/" exact />
        </Switch>
      </Router>

      {/* <footer>
        <Container>
          <Row>
            <Col sm={12} className="text-center py-3">Copyright © Your Website 2020.</Col>
          </Row>
        </Container>
      </footer> */}
    </div>
  );
}

export default App;
