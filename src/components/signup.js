import React from "react";
// import useForm from "./useForm";
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { logDOM } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import InnerBgImg from "./../assets/images/login-bg.jpg";
const SignUp = () => {
  //   const { values, errors, handleChange, handleSubmit } = useForm(
  //       login,
  //     register,
  //     validate
  //   );
  function register() {
    console.log("No errors, submit callback called!");
  }
  function handleSubmit() {}

  function handleChange() {}


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
          <Col sm={12} md={6} lg={6} className="mx-auto">
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
                        className="form-control form-control-lg input"
                        type="text"
                        name="fisrtName"
                        // onChange={handleChange}
                        // value={values.email || ""}
                        required
                      />
                      <span className="floating-label">First Name*</span>
                      {/* {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )} */}
                    </FormGroup>
                  </div>
                  <div className="field">
                    <FormGroup>
                      <input
                        autoComplete="off"
                        className="form-control form-control-lg input"
                        type="text"
                        name="lastName"
                        // onChange={handleChange}
                        // value={values.firstName || ""}
                        required
                      />
                      <span className="floating-label">Last Name*</span>
                      {/* {errors.firstName && (
                        <p className="help is-danger">{errors.email}</p>
                      )} */}
                    </FormGroup>
                  </div>
                  <div className="field">
                    <FormGroup>
                      <input
                        autoComplete="off"
                        className="form-control form-control-lg input"
                        type="email"
                        name="email"
                        // onChange={handleChange}
                        // value={values.lastName || ""}
                        required
                      />
                      <span className="floating-label">Your Email*</span>
                      {/* {errors.lastName && (
                        <p className="help is-danger">{errors.lastName}</p>
                      )} */}
                    </FormGroup>
                  </div>
                  <div className="field">
                    <FormGroup>
                      <input
                        className="form-control form-control-lg input"
                        type="password"
                        name="password"
                        bssize="lg"
                        // onChange={handleChange}
                        // value={values.password || ""}
                        required
                      />
                      <span className="floating-label">Enter Password*</span>
                      {/* {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                      )} */}
                    </FormGroup>
                  </div>
                  <Button
                    className="cta-book"
                    color="primary"
                    size="lg"
                    block
                    type="submit"
                  >
                    Register
                  </Button>
                </form>
                <div className="d-flex">
                  <Link to="/signin" className="ml-auto log-text">
                    Back to Login
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

export default SignUp;
