import Image from "next/image";

export default function HelpCenterPage() {
  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="bg-primary bg-opacity-10">
        <div className="container">
          <div className="row">
            {/* Content START */}
            <div className="col-lg-8 mx-auto text-center">
              {/* Title */}
              <h1 className="display-6">Search Solution. Get Support</h1>
              <p className="mb-0">
                Search here to get answers to your questions.
              </p>
              {/* Search bar */}
              <form className="bg-body rounded p-2 mt-4">
                <div className="input-group">
                  <input
                    className="form-control border-0 me-1"
                    type="text"
                    placeholder="Search question..."
                  />
                  <button type="button" className="btn btn-dark mb-0 rounded">
                    Search
                  </button>
                </div>
              </form>

              {/* Popular questions START */}
              <div className="row mt-4 align-items-center">
                <div className="col-12">
                  <h5 className="mb-3">Popular questions</h5>
                  {/* Questions List START */}
                  <div className="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
                    <a
                      className="btn btn-white btn-sm fw-light"
                      href="help-center-detail.html"
                    >
                      {" "}
                      How can we help?
                    </a>
                    <a
                      className="btn btn-white btn-sm fw-light"
                      href="help-center-detail.html"
                    >
                      {" "}
                      How to upload data to the system?{" "}
                    </a>
                    <a
                      className="btn btn-white btn-sm fw-light"
                      href="help-center-detail.html"
                    >
                      {" "}
                      Installation Guide?{" "}
                    </a>
                    <a
                      className="btn btn-white btn-sm fw-light"
                      href="help-center-detail.html"
                    >
                      {" "}
                      How to view expired course?{" "}
                    </a>
                    <a
                      className="btn btn-white btn-sm fw-light"
                      href="help-center-detail.html"
                    >
                      {" "}
                      What's are the difference between a social?
                    </a>
                    <a
                      className="btn btn-primary-soft btn-sm fw-light"
                      href="#!"
                    >
                      View all question
                    </a>
                  </div>
                  {/* Questions list END */}
                </div>
              </div>
              {/* Popular questions END */}
            </div>
            {/* Content END */}

            {/* Image */}
            <div className="col-12 mt-6">
              <Image
                src="/assets/images/element/help-center.svg"
                className="w-100"
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Recommended topics START */}
      <section>
        <div className="container">
          {/* Titles */}
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-center mb-4">Recommended Topics</h2>
            </div>
          </div>

          {/* Row START */}
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              {/* Card START */}
              <div className="card bg-light h-100">
                {/* Title */}
                <div className="card-header bg-light pb-0 border-0">
                  <i className="bi bi-emoji-smile fs-1 text-success"></i>
                  <h5 className="card-title mb-0 mt-2">Get started </h5>
                </div>
                {/* List */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Gulp and Customization
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Color Scheme and Logo Settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Dark mode, RTL Version and Lazy Load
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Sources, Credits and Changelog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Updates and Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card END */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* Card START */}
              <div className="card bg-light h-100">
                {/* Title */}
                <div className="card-header bg-light pb-0 border-0">
                  <i className="bi bi-layers fs-1 text-warning"></i>
                  <h5 className="card-title mb-0 mt-2">Account Setup</h5>
                </div>
                {/* List */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Connecting to your Account
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Edit your profile information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Connecting to other Social Media Accounts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Adding your profile picture
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Describing your store
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card END */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* Card START */}
              <div className="card bg-light h-100">
                {/* Title */}
                <div className="card-header bg-light pb-0 border-0">
                  <i className="bi bi-info-circle fs-1 text-orange"></i>
                  <h5 className="card-title mb-0 mt-2">Other Topics </h5>
                </div>
                {/* List */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Security &amp; Privacy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Author, Publisher &amp; Admin Guides
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Pricing plans
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Sales Tax &amp; Regulatory Fees
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Promotions &amp; Deals
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card END */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* Card START */}
              <div className="card bg-light h-100">
                {/* Title START */}
                <div className="card-header bg-light pb-0 border-0">
                  <i className="bi bi-house fs-1 text-purple"></i>
                  <h5 className="card-title mb-0 mt-2">Advanced Usage </h5>
                </div>
                {/* List */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>
                        Admin &amp; Billing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>
                        Become a Pro
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>
                        Mobile application
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>
                        Guide
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="help-center-detail.html"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>
                        Promotions &amp; Deals
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card END */}
            </div>
          </div>
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Recommended topics END */}

      {/* =======================
Popular articles START */}
      <section>
        <div className="container">
          {/* Titles */}
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-center mb-4">Popular Articles</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-6">
              {/* Card item START */}
              <div className="card card-body border p-4 h-100">
                {/* Title */}
                <h4 className="card-title mb-4">
                  <a href="#" className="stretched-link">
                    The installation part
                  </a>
                </h4>

                {/* Avatar group and content */}
                <div className="d-sm-flex align-items-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/01.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/02.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/03.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <div className="ms-sm-2">
                    <h6 className="mb-1">10 articles in this collection</h6>
                    <p className="mb-0">
                      Written by <b>Carolyn Ortiz</b> ,<b>Billy Vasquez</b> and{" "}
                      <b>Larry Lawson</b>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>

            <div className="col-xl-6">
              {/* Card item START */}
              <div className="card card-body border p-4 h-100">
                {/* Title */}
                <h4 className="card-title mb-4">
                  <a href="#" className="stretched-link">
                    Supporting Customer With Inbox
                  </a>
                </h4>

                {/* Avatar group and content */}
                <div className="d-sm-flex align-items-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/08.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/04.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <div className="ms-sm-2">
                    <h6 className="mb-1">5 articles in this collection</h6>
                    <p className="mb-0">
                      Written by <b>Dennis Barrett</b> and <b>Louis Ferguson</b>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>

            <div className="col-xl-6">
              {/* Card item START */}
              <div className="card card-body border p-4 h-100">
                {/* Title */}
                <h4 className="card-title mb-4">
                  <a href="#" className="stretched-link">
                    Sending Effective Emails{" "}
                  </a>
                </h4>

                {/* Avatar group and content */}
                <div className="d-sm-flex align-items-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/05.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <div className="ms-sm-2">
                    <h6 className="mb-1">4 articles in this collection</h6>
                    <p className="mb-0">
                      Written by <b>Jacqueline Miller</b>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>

            <div className="col-xl-6">
              {/* Card item START */}
              <div className="card card-body border p-4 h-100">
                {/* Title */}
                <h4 className="card-title mb-4">
                  <a href="#" className="stretched-link">
                    Connect With Customers
                  </a>
                </h4>

                {/* Avatar group and content */}
                <div className="d-sm-flex align-items-center">
                  {/* Avatar group */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/09.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                    <li className="avatar avatar-md">
                      <Image
                        src="/assets/images/avatar/10.jpg"
                        className="avatar-img rounded-circle border-white"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <div className="ms-sm-2">
                    <h6 className="mb-1">11 articles in this collection</h6>
                    <p className="mb-0">
                      Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b>
                    </p>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Popular articles END */}

      {/* =======================
Action boxes START */}
      <section>
        <div className="container">
          <div className="row g-4">
            {/* Action box item */}
            <div className="col-lg-4">
              <div className="bg-info bg-opacity-10 rounded-3 p-5">
                {/* Icon */}
                <h2 className="display-5 text-info">
                  <i className="bi bi-headset"></i>
                </h2>
                {/* Title */}
                <h3>Contact Support?</h3>
                <p>
                  Delay death ask to style Me mean able conviction For every
                  delay death ask to style
                </p>
                {/* Button */}
                <a href="#" className="btn btn-dark mb-0">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Action box item */}
            <div className="col-lg-4">
              <div className="bg-purple bg-opacity-10 rounded-3 p-5">
                {/* Icon */}
                <h2 className="display-5 text-purple">
                  <i className="fas fa-ticket-alt"></i>
                </h2>
                {/* Title */}
                <h3>Submit a Ticket</h3>
                <p>
                  Prosperous impression had conviction For every delay death ask
                  to style Me mean able
                </p>
                {/* Button */}
                <a href="#" className="btn btn-dark mb-0">
                  Submit Ticket
                </a>
              </div>
            </div>

            {/* Action box item */}
            <div className="col-lg-4">
              <div className="bg-warning bg-opacity-15 rounded-3 p-5">
                {/* Icon */}
                <h2 className="display-5 text-warning">
                  <i className="bi bi-envelope-fill"></i>
                </h2>
                {/* Title */}
                <h3>Request a feature</h3>
                <p>
                  Prosperous impression had conviction For every delay death ask
                  to style Me mean able
                </p>
                {/* Button */}
                <a href="#" className="btn btn-dark mb-0">
                  Request
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Action boxes ENd */}
    </main>
  );
}
