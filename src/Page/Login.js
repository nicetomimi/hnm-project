import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-title-area">
        <h2>로그인</h2>
        <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
      </div>
      <div className="login-container">
        <Form
          onSubmit={(event) => {
            loginUser(event);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="로그인 상태 유지" />
          </Form.Group>
          <Button variant="dark" type="submit">
            로그인
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
