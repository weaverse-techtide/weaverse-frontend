const SignInForm = () => {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const signInApi = `${api}/login/`;

  return (
    <form action={signInApi} method="post">
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
            name="email"
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
            name="password"
            autoComplete="current-password"
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
