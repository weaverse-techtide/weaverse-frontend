import Image from "next/image";

export default function AdminDashboardPage() {
  return (
    <main>
      {/* Sidebar START */}
      <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
        {/* Navbar brand for xl START */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="index.html">
            <Image
              src="/assets/images/logo-light.svg"
              alt=""
              height={100}
              width={100}
              className="navbar-brand-item"
            />
          </a>
        </div>
        {/* Navbar brand for xl END */}

        <div
          className="offcanvas offcanvas-start flex-row custom-scrollbar h-100"
          data-bs-backdrop="true"
          tabIndex="-1"
          id="offcanvasSidebar"
        >
          <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
            {/* Sidebar menu START */}
            <ul className="navbar-nav flex-column" id="navbar-sidebar">
              {/* Menu item 1 */}
              <li className="nav-item">
                <a href="admin-dashboard.html" className="nav-link active">
                  <i className="bi bi-house fa-fw me-2"></i>Dashboard
                </a>
              </li>

              {/* Title */}
              <li className="nav-item ms-2 my-2">Pages</li>

              {/* menu item 2 */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapsepage"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepage"
                >
                  <i className="bi bi-basket fa-fw me-2"></i>Courses
                </a>
                {/* Submenu */}
                <ul
                  className="nav collapse flex-column"
                  id="collapsepage"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-course-list.html">
                      All Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-course-category.html">
                      Course Category
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-course-detail.html">
                      Course Detail
                    </a>
                  </li>
                </ul>
              </li>

              {/* Menu item 3 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="admin-student-list.html">
                  <i className="fas fa-user-graduate fa-fw me-2"></i>Students
                </a>
              </li>

              {/* Menu item 4 */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapseinstructors"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseinstructors"
                >
                  <i className="fas fa-user-tie fa-fw me-2"></i>Instructors
                </a>
                {/* Submenu */}
                <ul
                  className="nav collapse flex-column"
                  id="collapseinstructors"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-instructor-list.html">
                      Instructors
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-instructor-detail.html">
                      Instructor Detail
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="admin-instructor-request.html"
                    >
                      Instructor requests
                      <span className="badge text-bg-success rounded-circle ms-2">
                        2
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Menu item 5 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="admin-review.html">
                  <i className="far fa-comment-dots fa-fw me-2"></i>Reviews
                </a>
              </li>

              {/* Menu item 6 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="admin-earning.html">
                  <i className="far fa-chart-bar fa-fw me-2"></i>Earnings
                </a>
              </li>

              {/* Menu item 7 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="admin-setting.html">
                  <i className="fas fa-user-cog fa-fw me-2"></i>Admin Settings
                </a>
              </li>

              {/* Menu item 8 */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapseauthentication"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseauthentication"
                >
                  <i className="bi bi-lock fa-fw me-2"></i>Authentication
                </a>
                {/* Submenu */}
                <ul
                  className="nav collapse flex-column"
                  id="collapseauthentication"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="sign-up.html">
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="sign-in.html">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="forgot-password.html">
                      Forgot Password
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="admin-error-404.html">
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>

              {/* Title */}
              <li className="nav-item ms-2 my-2">Documentation</li>

              {/* Menu item 9 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="docs/index.html">
                  <i className="far fa-clipboard fa-fw me-2"></i>Documentation
                </a>
              </li>

              {/* Menu item 10 */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="docs/changelog.html">
                  <i className="fas fa-sitemap fa-fw me-2"></i>Changelog
                </a>
              </li>
            </ul>
            {/* Sidebar menu end */}

            {/* Sidebar footer START */}
            <div className="px-3 mt-auto pt-3">
              <div className="d-flex align-items-center justify-content-between text-primary-hover">
                <a
                  className="h5 mb-0 text-body"
                  href="admin-setting.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Settings"
                >
                  <i className="bi bi-gear-fill"></i>
                </a>
                <a
                  className="h5 mb-0 text-body"
                  href="index.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Home"
                >
                  <i className="bi bi-globe"></i>
                </a>
                <a
                  className="h5 mb-0 text-body"
                  href="sign-in.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Sign out"
                >
                  <i className="bi bi-power"></i>
                </a>
              </div>
            </div>
            {/* Sidebar footer END */}
          </div>
        </div>
      </nav>
      {/* Sidebar END */}

      {/* Page content START */}
      <div className="page-content">
        {/* Top bar START */}
        <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
          <div className="container-fluid p-0">
            <div className="d-flex align-items-center w-100">
              {/* Logo START */}
              <div className="d-flex align-items-center d-xl-none">
                <a className="navbar-brand" href="index.html">
                  <Image
                    src="/assets/images/logo-mobile-light.svg"
                    alt=""
                    height={100}
                    width={100}
                    className="light-mode-item navbar-brand-item h-30px"
                  />
                  <Image
                    src="/assets/images/logo-mobile-dark.svg"
                    alt=""
                    height={100}
                    width={100}
                    className="dark-mode-item navbar-brand-item h-30px"
                  />
                </a>
              </div>
              {/* Logo END */}

              {/* Toggler for sidebar START */}
              <div className="navbar-expand-xl sidebar-offcanvas-menu">
                <button
                  className="navbar-toggler me-auto"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-controls="offcanvasSidebar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-bs-auto-close="outside"
                >
                  <i
                    className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip"
                    data-bs-target="#offcanvasMenu"
                  >
                    {" "}
                  </i>
                </button>
              </div>
              {/* Toggler for sidebar END */}

              {/* Top bar left */}
              <div className="navbar-expand-lg ms-auto ms-xl-0">
                {/* Toggler for menubar START */}
                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTopContent"
                  aria-controls="navbarTopContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
                {/* Toggler for menubar END */}

                {/* Topbar menu START */}
                <div
                  className="collapse navbar-collapse w-100"
                  id="navbarTopContent"
                >
                  {/* Top search START */}
                  <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                    <div className="nav-item w-100">
                      <form className="position-relative">
                        <input
                          className="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                          type="submit"
                        >
                          <i className="fas fa-search fs-6 text-primary"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Top search END */}
                </div>
                {/* Topbar menu END */}
              </div>
              {/* Top bar left END */}

              {/* Top bar right START */}
              <div className="ms-xl-auto">
                <ul className="navbar-nav flex-row align-items-center">
                  {/* Notification dropdown START */}
                  <li className="nav-item ms-2 ms-md-3 dropdown">
                    {/* Notification button */}
                    <a
                      className="btn btn-light btn-round mb-0"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      <i className="bi bi-bell fa-fw"></i>
                    </a>
                    {/* Notification dote */}
                    <span className="notif-badge animation-blink"></span>

                    {/* Notification dropdown menu START */}
                    <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                      <div className="card bg-transparent">
                        <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                          <h6 className="m-0">
                            Notifications{" "}
                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                              2 new
                            </span>
                          </h6>
                          <a className="small" href="#">
                            Clear all
                          </a>
                        </div>
                        <div className="card-body p-0">
                          <ul className="list-group list-unstyled list-group-flush">
                            {/* Notif item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item-action border-0 border-bottom d-flex p-3"
                              >
                                <div className="me-3">
                                  <div className="avatar avatar-md">
                                    <Image
                                      src="/assets/images/avatar/08.jpg"
                                      alt=""
                                      height={100}
                                      width={100}
                                      className="avatar-img rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p className="text-body small m-0">
                                    Congratulate <b>Joan Wallace</b> for
                                    graduating from <b>Microverse university</b>
                                  </p>
                                  <u className="small">Say congrats</u>
                                </div>
                              </a>
                            </li>

                            {/* Notif item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item-action border-0 border-bottom d-flex p-3"
                              >
                                <div className="me-3">
                                  <div className="avatar avatar-md">
                                    <Image
                                      src="/assets/images/avatar/02.jpg"
                                      alt=""
                                      height={100}
                                      width={100}
                                      className="avatar-img rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Larry Lawson Added a new course
                                  </h6>
                                  <p className="small text-body m-0">
                                    What&apos;s new! Find out about new features
                                  </p>
                                  <u className="small">View detail</u>
                                </div>
                              </a>
                            </li>

                            {/* Notif item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item-action border-0 border-bottom d-flex p-3"
                              >
                                <div className="me-3">
                                  <div className="avatar avatar-md">
                                    <Image
                                      src="/assets/images/avatar/05.jpg"
                                      alt=""
                                      height={100}
                                      width={100}
                                      className="avatar-img rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    New request to apply for Instructor
                                  </h6>
                                  <u className="small">View detail</u>
                                </div>
                              </a>
                            </li>

                            {/* Notif item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item-action border-0 border-bottom d-flex p-3"
                              >
                                <div className="me-3">
                                  <div className="avatar avatar-md">
                                    <Image
                                      src="/assets/images/avatar/03.jpg"
                                      alt=""
                                      height={100}
                                      width={100}
                                      className="avatar-img rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Update v2.3 completed successfully
                                  </h6>
                                  <p className="small text-body m-0">
                                    What&apos;s new! Find out about new features
                                  </p>
                                  <small className="text-body">5 min ago</small>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Button */}
                        <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                          <a href="#" className="stretched-link">
                            See all incoming activity
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Notification dropdown menu END */}
                  </li>
                  {/* Notification dropdown END */}

                  {/* Profile dropdown START */}
                  <li className="nav-item ms-2 ms-md-3 dropdown">
                    {/* Avatar */}
                    <a
                      className="avatar avatar-sm p-0"
                      href="#"
                      id="profileDropdown"
                      role="button"
                      data-bs-auto-close="outside"
                      data-bs-display="static"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="/assets/images/avatar/01.jpg"
                        alt=""
                        height={100}
                        width={100}
                        className="avatar-img rounded-circle"
                      />
                    </a>

                    {/* Profile dropdown START */}
                    <ul
                      className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                      aria-labelledby="profileDropdown"
                    >
                      {/* Profile info */}
                      <li className="px-3">
                        <div className="d-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar me-3 mb-3">
                            <Image
                              src="/assets/images/avatar/01.jpg"
                              alt=""
                              height={100}
                              width={100}
                              className="avatar-img rounded-circle shadow"
                            />
                          </div>
                          <div>
                            <a className="h6 mt-2 mt-sm-0" href="#">
                              Lori Ferguson
                            </a>
                            <p className="small m-0">example@gmail.com</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />
                      </li>
                      {/* Links */}
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-person fa-fw me-2"></i>Edit
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-gear fa-fw me-2"></i>Account
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-info-circle fa-fw me-2"></i>Help
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item bg-danger-soft-hover"
                          href="#"
                        >
                          <i className="bi bi-power fa-fw me-2"></i>Sign Out
                        </a>
                      </li>
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />
                      </li>

                      {/* Dark mode options START */}
                      <li>
                        <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                          {/* <span>Mode:</span> */}
                          <button
                            type="button"
                            className="btn btn-sm mb-0"
                            data-bs-theme-value="light"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-sun fa-fw mode-switch"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                              <use href="#"></use>
                            </svg>{" "}
                            Light
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm mb-0"
                            data-bs-theme-value="dark"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-moon-stars fa-fw mode-switch"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                              <use href="#"></use>
                            </svg>{" "}
                            Dark
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm mb-0 active"
                            data-bs-theme-value="auto"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-circle-half fa-fw mode-switch"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                              <use href="#"></use>
                            </svg>{" "}
                            Auto
                          </button>
                        </div>
                      </li>
                      {/* Dark mode options END */}
                    </ul>
                    {/* Profile dropdown END */}
                  </li>
                  {/* Profile dropdown END */}
                </ul>
              </div>
              {/* Top bar right END */}
            </div>
          </div>
        </nav>
        {/* Top bar END */}

        {/* Page main content START */}
        <div className="page-content-wrapper border">
          {/* Title */}
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
            </div>
          </div>

          {/* Counter boxes START */}
          <div className="row g-4 mb-4">
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Digit */}
                  <div>
                    <h2
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="1958"
                      data-purecounter-delay="200"
                    >
                      0
                    </h2>
                    <span className="mb-0 h6 fw-light">Completed Courses</span>
                  </div>
                  {/* Icon */}
                  <div className="icon-lg rounded-circle bg-warning text-white mb-0">
                    <i className="fas fa-tv fa-fw"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Digit */}
                  <div>
                    <h2
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="1600"
                      data-purecounter-delay="200"
                    >
                      0
                    </h2>
                    <span className="mb-0 h6 fw-light">Enrolled Courses</span>
                  </div>
                  {/* Icon */}
                  <div className="icon-lg rounded-circle bg-purple text-white mb-0">
                    <i className="fas fa-user-tie fa-fw"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Digit */}
                  <div>
                    <h2
                      className="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="1235"
                      data-purecounter-delay="200"
                    >
                      0
                    </h2>
                    <span className="mb-0 h6 fw-light">Course In Progress</span>
                  </div>
                  {/* Icon */}
                  <div className="icon-lg rounded-circle bg-primary text-white mb-0">
                    <i className="fas fa-user-graduate fa-fw"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Digit */}
                  <div>
                    <div className="d-flex">
                      <h2
                        className="purecounter mb-0 fw-bold"
                        data-purecounter-start="0"
                        data-purecounter-end="845"
                        data-purecounter-delay="200"
                      >
                        0
                      </h2>
                      <span className="mb-0 h2 ms-1">hrs</span>
                    </div>
                    <span className="mb-0 h6 fw-light">Total Watch Time</span>
                  </div>
                  {/* Icon */}
                  <div className="icon-lg rounded-circle bg-success text-white mb-0">
                    <i className="bi bi-stopwatch-fill fa-fw"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter boxes END */}

          {/* Chart and Ticket START */}
          <div className="row g-4 mb-4">
            {/* Chart START */}
            <div className="col-xxl-8">
              <div className="card shadow h-100">
                {/* Card header */}
                <div className="card-header p-4 border-bottom">
                  <h5 className="card-header-title">Earnings</h5>
                </div>

                {/* Card body */}
                <div className="card-body">
                  {/* Apex chart */}
                  <div id="ChartPayout"></div>
                </div>
              </div>
            </div>
            {/* Chart END */}

            {/* Ticket START */}
            <div className="col-xxl-4">
              <div className="card shadow h-100">
                {/* Card header */}
                <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                  <h5 className="card-header-title">Support Requests</h5>
                  <a href="#" className="btn btn-link p-0 mb-0">
                    View all
                  </a>
                </div>

                {/* Card body START */}
                <div className="card-body p-4">
                  {/* Ticket item START */}
                  <div className="d-flex justify-content-between position-relative">
                    <div className="d-sm-flex">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/09.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Lori Stevens
                          </a>
                        </h6>
                        <p className="mb-0">
                          New ticket #759 from Lori Stevens for General Enquiry
                        </p>
                        <span className="small">8 hour ago</span>
                      </div>
                    </div>
                  </div>
                  {/* Ticket item END */}

                  <hr />
                  {/* Divider */}

                  {/* Ticket item START */}
                  <div className="d-flex justify-content-between position-relative">
                    <div className="d-sm-flex">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <div className="avatar-img rounded-circle bg-purple bg-opacity-10">
                          <span className="text-purple position-absolute top-50 start-50 translate-middle fw-bold">
                            DB
                          </span>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Dennis Barrett
                          </a>
                        </h6>
                        <p className="mb-0">
                          Comment from Billy Vasquez on ticket #659
                        </p>
                        <span className="small">8 hour ago</span>
                      </div>
                    </div>
                  </div>
                  {/* Ticket item END */}

                  <hr />
                  {/* Divider */}

                  {/* Ticket item START */}
                  <div className="d-flex justify-content-between position-relative">
                    <div className="d-sm-flex">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <div className="avatar-img rounded-circle bg-orange bg-opacity-10">
                          <span className="text-orange position-absolute top-50 start-50 translate-middle fw-bold">
                            WB
                          </span>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Dennis Barrett
                          </a>
                        </h6>
                        <p className="mb-0">
                          <b>Webestica</b> assign you a new ticket for{" "}
                          <b>Eduport theme</b>
                        </p>
                        <span className="small">5 hour ago</span>
                      </div>
                    </div>
                  </div>
                  {/* Ticket item END */}

                  <hr />
                  {/* Divider */}

                  {/* Ticket item START */}
                  <div className="d-flex justify-content-between position-relative">
                    <div className="d-sm-flex">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/04.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Dennis Barrett
                          </a>
                        </h6>
                        <p className="mb-0">
                          Thanks for contact us with your issues.
                        </p>
                        <span className="small">9 hour ago</span>
                      </div>
                    </div>
                  </div>
                  {/* Ticket item END */}
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Ticket END */}
          </div>
          {/* Chart and Ticket END */}

          {/* Top listed Cards START */}
          <div className="row g-4">
            {/* Top instructors START */}
            <div className="col-lg-6 col-xxl-4">
              <div className="card shadow h-100">
                {/* Card header */}
                <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                  <h5 className="card-header-title">Top Instructors</h5>
                  <a href="#" className="btn btn-link p-0 mb-0">
                    View all
                  </a>
                </div>

                {/* Card body START */}
                <div className="card-body p-4">
                  {/* Instructor item START */}
                  <div className="d-sm-flex justify-content-between align-items-center">
                    {/* Avatar and info */}
                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/09.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">
                          Lori Stevens
                          <i className="bi bi-patch-check-fill text-info small ms-1"></i>
                        </h6>
                        <ul className="list-inline mb-0 small">
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-1"></i>25
                            Courses
                          </li>
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-1"></i>
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-light mb-0">
                      View
                    </a>
                  </div>
                  {/* Instructor item END */}

                  <hr />
                  {/* Divider */}

                  {/* Instructor item START */}
                  <div className="d-sm-flex justify-content-between align-items-center">
                    {/* Avatar and info */}
                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/03.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">Dennis Barrett</h6>
                        <ul className="list-inline mb-0 small">
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-1"></i>18
                            Courses
                          </li>
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-1"></i>
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-light mb-0">
                      View
                    </a>
                  </div>
                  {/* Instructor item END */}

                  <hr />
                  {/* Divider */}

                  {/* Instructor item START */}
                  <div className="d-sm-flex justify-content-between align-items-center">
                    {/* Avatar and info */}
                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/01.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">
                          Jacqueline Miller
                          <i className="bi bi-patch-check-fill text-info small ms-1"></i>
                        </h6>
                        <ul className="list-inline mb-0 small">
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-1"></i>21
                            Courses
                          </li>
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-1"></i>
                            4.8/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-light mb-0">
                      View
                    </a>
                  </div>
                  {/* Instructor item END */}

                  <hr />
                  {/* Divider */}

                  {/* Instructor item START */}
                  <div className="d-sm-flex justify-content-between align-items-center">
                    {/* Avatar and info */}
                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/04.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">Billy Vasquez</h6>
                        <ul className="list-inline mb-0 small">
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-1"></i>15
                            Courses
                          </li>
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-1"></i>
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-light mb-0">
                      View
                    </a>
                  </div>
                  {/* Instructor item END */}

                  <hr />
                  {/* Divider */}

                  {/* Instructor item START */}
                  <div className="d-sm-flex justify-content-between align-items-center">
                    {/* Avatar and info */}
                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <Image
                          src="/assets/images/avatar/05.jpg"
                          alt=""
                          height={100}
                          width={100}
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h6 className="mb-1">
                          Amanda Reed
                          <i className="bi bi-patch-check-fill text-info small ms-1"></i>
                        </h6>
                        <ul className="list-inline mb-0 small">
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-book text-purple me-1"></i>29
                            Courses
                          </li>
                          <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                            <i className="fas fa-star text-warning me-1"></i>
                            4.5/5.0
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-light mb-0">
                      View
                    </a>
                  </div>
                  {/* Instructor item END */}
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Top instructors END */}

            {/* Notice Board START */}
            <div className="col-lg-6 col-xxl-4">
              <div className="card shadow h-100">
                {/* Card header */}
                <div className="card-header border-bottom p-4">
                  <h5 className="card-header-title">Notice board</h5>
                </div>

                {/* Card body START */}
                <div className="card-body p-4">
                  <div className="custom-scrollbar h-300px">
                    {/* Notice Board item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        <div className="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0">
                          <i className="fas fa-user-tie fs-5"></i>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Join New Instructor
                            </a>
                          </h6>
                          <p className="mb-0">
                            Amongst moments do in arrived Fat weddings believed
                            prospect
                          </p>
                          <span className="small">5 min ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Notice Board item END */}

                    <hr />
                    {/* Divider */}

                    {/* Notice Board item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0">
                          <i className="fas fa-book-open fs-5"></i>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Update New Course
                            </a>
                          </h6>
                          <p className="mb-0">
                            Arrived Fat weddings believed prospect
                          </p>
                          <span className="small">4 hour ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Notice Board item END */}

                    <hr />
                    {/* Divider */}

                    {/* Notice Board item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        <div className="icon-lg bg-info bg-opacity-10 text-info rounded-2 flex-shrink-0">
                          <i className="fas fa-book fs-5"></i>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Update Syllabus
                            </a>
                          </h6>
                          <p className="mb-0">
                            Arrived Fat weddings believed prospect
                          </p>
                          <span className="small">2 days ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Notice Board item END */}

                    <hr />
                    {/* Divider */}

                    {/* Notice Board item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0">
                          <i className="fas fa-globe fs-5"></i>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Update New Feature
                            </a>
                          </h6>
                          <p className="mb-0">
                            Arrived Fat weddings believed prospect
                          </p>
                          <span className="small">3 days ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Notice Board item END */}
                  </div>
                </div>
                {/* Card body END */}

                {/* Card footer START */}
                <div className="card-footer border-top">
                  <div className="alert alert-success d-flex align-items-center mb-0 py-2">
                    <div>
                      <small className="mb-0">45 more notices listed</small>
                    </div>
                    <div className="ms-auto">
                      <a className="btn btn-sm btn-success-soft mb-0" href="#!">
                        {" "}
                        View all{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Card footer START */}
              </div>
            </div>
            {/* Notice Board END */}

            {/* Traffic sources START */}
            <div className="col-lg-6 col-xxl-4">
              <div className="card shadow h-100">
                {/* Card header */}
                <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                  <h5 className="card-header-title">Traffic Sources</h5>
                  <a href="#" className="btn btn-link p-0 mb-0">
                    View all
                  </a>
                </div>

                {/* Card body START */}
                <div className="card-body p-4">
                  {/* Chart */}
                  <div className="col-sm-6 mx-auto">
                    <div id="ChartTrafficViews"></div>
                  </div>

                  {/* Content */}
                  <ul className="list-group list-group-borderless mt-3">
                    <li className="list-group-item">
                      <i className="text-primary fas fa-circle me-2"></i>Create
                      a Design System in Figma
                    </li>
                    <li className="list-group-item">
                      <i className="text-success fas fa-circle me-2"></i>The
                      Complete Digital Marketing Course - 12 Courses in 1
                    </li>
                    <li className="list-group-item">
                      <i className="text-warning fas fa-circle me-2"></i>Google
                      Ads Training: Become a PPC Expert
                    </li>
                    <li className="list-group-item">
                      <i className="text-danger fas fa-circle me-2"></i>
                      Microsoft Excel - Excel from Beginner to Advanced
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card body END */}
            </div>
            {/* Traffic sources END */}
          </div>
          {/* Top listed Cards END */}
        </div>
        {/* Page main content END */}
      </div>
      {/* Page content END */}
    </main>
  );
}
