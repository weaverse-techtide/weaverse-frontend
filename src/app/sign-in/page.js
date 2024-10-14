import SignInForm from "./SignInForm";

export default function SignInPage() {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const googleLoginAPI = api + "/social-login/google/";

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Title */}
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">안녕하세요! 로그인 해주세요.</h1>
                  <p className="lead mb-4">
                    로그인을 하시면 더 많은 기능을 이용하실 수 있습니다.
                  </p>
                  <SignInForm />
                  <div className="row">
                    {/* Divider with text */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        Or
                      </p>
                    </div>

                    {/* Social btn */}
                    <div className="col-xxl-12 d-grid">
                      <a
                        href={googleLoginAPI}
                        className="btn bg-google mb-2 mb-xxl-0"
                      >
                        <i className="fab fa-fw fa-google text-white me-2"></i>
                        Login with Google
                      </a>
                    </div>
                  </div>

                  {/* Sign up link */}
                  <div className="mt-4 text-center">
                    <span>
                      Don&apos;t have an account?
                      <a href="/sign-up">Signup here</a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Row END */}
            </div>
          </div>
          {/* Row END */}
        </div>
      </section>
    </main>
  );
}
