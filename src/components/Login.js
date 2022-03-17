import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  console.log("In LogIn");
  const [isValidEmial, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigator = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSignIn = () => {
    console.log(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailRef.current.value
      )
    );
    console.log(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        passwordRef.current.value
      )
    );
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailRef.current.value
      )
    ) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        passwordRef.current.value
      )
    ) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
    let passwordValue = localStorage.getItem("password");

    let emailValue = localStorage.getItem("email");
    if (isValidEmial && isValidPassword) {
      debugger;

      if (
        passwordRef.current.value === passwordValue &&
        emailRef.current.value === emailValue
      ) {
        console.log("Successful login");
        navigator("/my-bank");
        localStorage.setItem("isLoggedIn", true);
        props.setIsLoggedIn(true);
      }else if (
        passwordRef.current.value === passwordValue ||
        emailValue === emailRef.current.value ||
        passwordRef.current.value === "" ||
        emailRef.current.value === "" 
      ) {
        alert("Please enter valid credentials");
      } else {
        alert("Please Register the user");
      }
    } 
  };
  return (
    <div className="container">
      <div className="card  ">
        <div className="heading">
          <h2>T-Evading Bank</h2>
        </div>
        
        <h4 className="heading">Log-In</h4>
        <div className="card-body ">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="text"
                placeholder="Enter email"
              />
              {!isValidEmial && (
                <span style={{ fontSize: "11px", color: "red" }}>
                  Please enter valid emial
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
              {!isValidPassword && (
                <span style={{ fontSize: "11px", color: "red" }}>
                  Password minimum eight characters, at least one uppercase
                  letter, one lowercase letter and one number.{" "}
                </span>
              )}
            </Form.Group>

            <button variant="primary "  type="submit">
              Log In
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
