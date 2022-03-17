import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
function MyBank(props) {
  const [isValidName, setIsValidName] = useState();
  const [isValidAccount, setIsValidAccount] = useState();
  const [isValidNumber, setIsValidNumber] = useState();
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (!props.isLoggedIn) {
      window.location.pathname = "/";
    }
  }, []);
  const navigator = useNavigate();
  console.log(props);
  const accountRef = useRef();
  const nameRef = useRef();
  const amountRef = useRef();
  const phoneNumberRef = useRef();
  const [isValidPhone, setValidPhone] = useState();
  const handleSignIn = async () => {
    debugger;
    console.log(/([0-9]{12})/.test(parseInt(accountRef.current.value)));
    console.log(parseInt(amountRef.current.value) <= 60000);
    if (nameRef.current.value.length > 0) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
    if (/([0-9]{12})/.test(parseInt(accountRef.current.value))) {
      setIsValidAccount(true);
    } else {
      setIsValidAccount(false);
    }
    debugger
if(!isValidName ||
  !isValidPhone||!isValidAccount){
return null
  }
    if (
      
      parseInt(amountRef.current.value) <= 60000 
      
    ) {
      alert("Successfully added");
    } else {
      localStorage.clear();
      alert("We Cannot Process Your Request Choose Some Other Bank");
      navigator("/");
    }
  };
  return (
    <div className="container card">
      {" "}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <h2 className="heading">Add Money</h2>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
          {!isValidName && (
            <span style={{ fontSize: "11px", color: "red" }}>
              Please enter valid emial
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            ref={accountRef}
            type="text"
            placeholder="Enter account number"
          />
          {!isValidAccount && (
            <span style={{ fontSize: "11px", color: "red" }}>
              Enter valid account number.{" "}
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount in $</Form.Label>
          <Form.Control
            ref={amountRef}
            type="text"
            placeholder="Enter Amonut"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <PhoneInput
            ref={phoneNumberRef}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            onChange={(value, country, e, formattedValue) => {
              setValidPhone(value.length === 12);
              console.log(value.length === 12);
            }}
          />
          {!isValidPhone && (
            <span style={{ fontSize: "11px", color: "red" }}>
              Please Enter Valid Phone Number.{" "}
            </span>
          )}
        </Form.Group>

        <button variant="primary" type="submit">
          Add Money
        </button>
      </Form>
    </div>
  );
}

export default MyBank;
