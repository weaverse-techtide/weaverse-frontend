"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL + "/student/register/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirm_password, nickname }),
      });

      if (response.ok) {
        // 회원가입 성공 시 로그인 페이지로 이동
        window.location.href = "/";
      } else {
        // 에러 메시지를 설정
        const data = await response.json();
        console.error(data);
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      // 서버 오류 처리
      console.error("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            {/* Right */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Title */}
                  <Image
                    src="/assets/images/element/03.svg"
                    className="h-40px mb-2"
                    alt=""
                    height={40}
                    width={40}
                  />
                  <h2>안녕하세요! 회원가입을 해주세요.</h2>
                  <p className="lead mb-4">꿈이 현실이 되는 곳, Weaverse!</p>
                  {/* Form START */}
                  <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    {/* Nickname */}
                    <div className="mb-4">
                      <label htmlFor="inputNickname" className="form-label">
                        Nickname *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="Nickname"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          id="inputNickname"
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
                          placeholder="*********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          id="inputPassword5"
                        />
                      </div>
                    </div>
                    {/* Confirm Password */}
                    <div className="mb-4">
                      <label htmlFor="inputPassword6" className="form-label">
                        Confirm Password *
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="*********"
                          value={confirm_password}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          autoComplete="current-password"
                          id="inputPassword6"
                        />
                      </div>
                    </div>
                    {/* Check box */}
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-1"
                        >
                          By signing up, you agree to the
                          <a href="#"> terms of service</a>
                        </label>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Form END */}

                  {/* Social buttons */}
                  <div className="row">
                    {/* Divider with text */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        Or
                      </p>
                    </div>
                    {/* Social btn */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                        <i className="fab fa-fw fa-google text-white me-2"></i>
                        Signup with Google
                      </a>
                    </div>
                    {/* Social btn */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" className="btn bg-facebook mb-0">
                        <i className="fab fa-fw fa-facebook-f me-2"></i>Signup
                        with Facebook
                      </a>
                    </div>
                  </div>

                  {/* Sign up link */}
                  <div className="mt-4 text-center">
                    <span>
                      Already have an account?
                      <Link href="/sign-in/">Sign in here</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
