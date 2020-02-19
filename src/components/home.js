import React, { useState } from "react";
import { logout, isLogin } from "../utils";
import { Link,Redirect } from "react-router-dom";
import {
  Row,
  Container,
  Button,
  FormGroup,
  Input,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
function Home() {
    const [state, setState] = useState(true);
    const isLogin = state; 

    const handleLogout = () => {
      logout();
      setState(!state);
    };
    return (
      <div>
        <h1>Home</h1>

        {isLogin ? (
          <button onClick={handleLogout}>Click here to log out</button>
        ) : (
          // <Link to="/signin">Go to sign in page</Link>
          <Redirect to="/signin" />
        )}
      </div>
    );
} export default Home