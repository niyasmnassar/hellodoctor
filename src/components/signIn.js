import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
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
import { logDOM } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { login } from "../utils";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import InnerBgImg from "./../assets/images/login-bg.jpg";

const SignIn = props => {
  const [name, setName] = useState({
    username: "",
    password: ""
  });
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    // handleSubmit();
    console.log(values);
    
  }

  // const handleLogin = () => {
  //   console.log(handleSubmit.values);
  //   login();
  //   props.history.push("/");
  // };

  return (
    <div
      className="users-wrap"
      style={{ backgroundImage: "url(" + InnerBgImg + ")" }}
    >
      <Container className="h-100">
        <Row className="h-100 justify-content-center align-items-center">
          <Col sm={12} md={6} lg={6} className="mx-auto slogan">
            <img
              className="img-fluid align-self-center"
              src={require("./../assets/images/logo-nav.png")}
              alt="logo"
            />
            <h2>
              <span>Connect with a</span> Doctor
            </h2>
          </Col>
          <Col sm={12} md={5} lg={5} className="mx-auto">
            <Card>
              <CardBody>
                <CardTitle>
                  <span className="login-icon">
                    <FontAwesomeIcon icon={faUserLock} />
                  </span>
                </CardTitle>
                <CardSubtitle className="mb-3">
                  <h2>Sign In</h2>
                </CardSubtitle>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <FormGroup>
                      <input
                        autoComplete="off"
                        className={`input form-control form-control-lg ${errors.username &&
                          "is-danger"}`}
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username || ""}
                        required
                      />
                      <span className="floating-label">
                        Your email address*
                      </span>
                      {values.username && (
                        <p className="help is-danger">{values.username}</p>
                      )}
                    </FormGroup>
                  </div>
                  <div className="field">
                    <FormGroup>
                      <input
                        className={`input form-control form-control-lg ${errors.password &&
                          "is-danger"}`}
                        type="password"
                        name="password"
                        bssize="lg"
                        onChange={handleChange}
                        value={values.password || ""}
                        required
                      />
                      <span className="floating-label">Enter Password*</span>
                      {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                      )}
                    </FormGroup>
                  </div>
                  <Button
                    // onClick={() => handleLogin()}
                    className="cta-book"
                    color="primary"
                    size="lg"
                    block
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
                <div className="d-flex">
                  <Link to="/signup" className="ml-auto log-text" href="#">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
