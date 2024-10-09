"use client";

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const url = process.env.NEXT_PUBLIC_API_URL + "/login/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // 로그인 성공 시 AccessToken을 쿠키에 저장
        const decodedToken = jwtDecode(data.access_token);
        const expires = decodedToken.exp - decodedToken.iat;
        Cookies.set("access_token", data.access_token, {
          expires: expires,
        });
        // 홈으로 이동
        window.location.href = "/";
      } else {
        // 에러 메시지를 설정
        setError(data.message || "로그인에 실패했습니다.");
      }
    } catch (err) {
      // 서버 오류 처리
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address *
        </label>
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
            <i className="bi bi-envelope-fill"></i>
          </span>
          <input
            type="email"
            className="form-control border-0 bg-light rounded-end ps-1"
            placeholder="E-mail"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      {/* Password */}
      <div className="mb-4">
        <label htmlFor="inputPassword5" className="form-label">
          Password *
        </label>
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
            <i className="fas fa-lock"></i>
          </span>
          <input
            type="password"
            className="form-control border-0 bg-light rounded-end ps-1"
            placeholder="password"
            id="inputPassword5"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8 characters at least
        </div>
      </div>
      {/* Check box */}
      <div className="mb-4 d-flex justify-content-between">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="text-primary-hover">
          <a href="forgot-password.html" className="text-secondary">
            <u>Forgot password?</u>
          </a>
        </div>
      </div>
      {/* Button */}
      {/* Error message */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {/* Submit */}
      <div className="align-items-center mt-0">
        <div className="d-grid">
          <button className="btn btn-primary mb-0" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
