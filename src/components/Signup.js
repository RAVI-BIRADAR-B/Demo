import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const SignUp = (props) => {
    const [isValidEmial, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
const navigator = useNavigate()
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
    if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailRef.current.value
      )){
          setIsValidEmail(true)
      } else {
        setIsValidEmail(false)
      }
      if( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
        passwordRef.current.value
      )){
          setIsValidPassword(true)
      }else {
        setIsValidPassword(false)
      }
      debugger
      if(isValidEmial&&isValidPassword){
     
    localStorage.setItem('email',emailRef.current.value)
    localStorage.setItem('password',passwordRef.current.value)
    emailRef.current.value.length&&passwordRef.current.value.length&&navigator('/login')
    emailRef.current.value =""  
    passwordRef.current.value = ""
    
    }
  };
  useEffect(()=>{
    props.setIsLoggedIn(false)
  },[])
  return (
    <div className="container">
      <div className="card  ">
        <div className="heading">
          <h2>T-Evading Bank</h2>
          
        </div>
        <h4 className="heading">Registration</h4>
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
              {!isValidEmial&&<span style={{fontSize:"11px",color:"red"}}>Please enter valid email</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
              {!isValidPassword&&<span style={{fontSize:"11px",color:"red"}}>Password   minimum eight characters, at least one uppercase letter, one lowercase letter and one number. </span>}

            </Form.Group>

            <button variant="primary" type="submit">
              {/* <Link to="/login"> */}
              Sign Up

              {/* </Link> */}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
