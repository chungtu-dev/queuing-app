import React, { FC, FormEvent, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import { LoginPage, LogoAlta } from '../assets/img'
import { login } from '../store/actions/authActions'

const Login: FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    login({ email, password })
    // navigate("/admin/dashboard");
    navigate("/auth/profile");
  };

  return (
    <Row>
      <Col className='section-login-form'>
        <img src={LogoAlta} className="logo-alta" alt="logo" />
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={submitHandler}>
            <div className="Auth-form-content">
              <div className="form-group mt-3">
                <label>Tên đăng nhập *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Mật khẩu *</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="submit-button">
                  Đăng nhập
                </button>
              </div>
              {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
            </div>
          </form>
        </div>
      </Col>

      <Col className="img-fluid">
        <img src={LoginPage} alt="" />
      </Col>

      <div className="info-page">
        <span>Hệ thống</span>
        <span>QUẢN LÝ XẾP HÀNG</span>
      </div>

    </Row>
  )
}

export default Login