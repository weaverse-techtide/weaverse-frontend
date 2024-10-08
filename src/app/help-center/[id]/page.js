import Image from "next/image";

export default function HelpCenterDetailPage() {
  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="bg-primary bg-opacity-10">
        <div className="container">
          <div className="row">
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
          </div>{" "}
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Page Content START */}
      <section>
        <div className="container" data-sticky-container>
          <div className="row g-4">
            {/* Left side START */}
            <div className="col-md-3">
              <div data-sticky data-margin-top="80" data-sticky-for="768">
                <div id="nav-scroll" className="navbar">
                  <nav className="nav nav-pills nav-pill-soft flex-column">
                    <a className="nav-link" href="#item-1">
                      <i className="bi bi-emoji-smile fa-fw me-2"></i>Get
                      Started
                    </a>
                    <a className="nav-link" href="#item-2">
                      <i className="bi bi-layers fa-fw me-2"></i>Account Setup
                    </a>
                    <a className="nav-link" href="#item-3">
                      <i className="bi bi-info-circle fa-fw me-2"></i>Other
                      Topics
                    </a>
                    <a className="nav-link" href="#item-4">
                      <i className="bi bi-house fa-fw me-2"></i>Advance Usage
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            {/* Left side END */}

            {/* Right side START */}
            <div className="col-md-9">
              <div
                className="nav-scroll"
                data-bs-spy="scroll"
                data-bs-target="#nav-scroll"
                data-bs-smooth-scroll="true"
                tabIndex="0"
              >
                {/* Get Started content START */}
                <div id="item-1">
                  <div className="card bg-transparent">
                    {/* Article title */}
                    <div className="card-header bg-transparent border-bottom py-0 px-0">
                      <h2>Get started with node.js</h2>
                      {/* Update and author */}
                      <ul className="nav nav-divider mb-3">
                        <li className="nav-item">Last updated: 7 months ago</li>
                        <li className="nav-item">by Sam Lanson</li>
                      </ul>
                    </div>
                    {/* Article Info */}
                    <div className="card-body px-0 pb-0">
                      <p>
                        Started several mistake joy say painful removed reached
                        end. State burst think end are its. Arrived off she
                        elderly beloved him affixed noisier yet. Course regard
                        to up he hardly. View four has said do men saw find dear
                        shy. <b> Talent men wicket add garden.</b>{" "}
                      </p>
                      {/* Button */}
                      <a href="#!" className="btn btn-primary">
                        Download Node JS
                      </a>
                      <h5 className="mt-4">Table of Contents</h5>
                      <p>Age she way earnestly the fulfilled extremely.</p>
                      <div className="alert alert-warning" role="alert">
                        <strong>Note: </strong>She offices for highest and
                        replied one venture pasture. Applauded no discovery in
                        newspaper allowance am northward.{" "}
                        <a className="alert-link" href="#!">
                          View more
                        </a>
                      </div>
                      <p>
                        Hold do at tore in park feet near my case. Invitation at
                        understood occasional sentiments insipidity inhabiting
                        in. Off melancholy alteration principles old. Is do
                        speedily kindness properly oh. Respect article painted
                        cottage he is offices parlors.{" "}
                      </p>
                      {/* Article list */}
                      <ul>
                        <li>
                          Affronting imprudence do he he everything. Sex lasted
                          dinner wanted indeed wished outlaw. Far advanced
                          settling say finished raillery.
                        </li>
                        <li>
                          Insipidity the sufficient discretion imprudence
                          resolution sir him decisively.
                        </li>
                        <li>
                          Offered chiefly farther of my no colonel shyness.{" "}
                          <strong> Such on help ye some door if in.</strong>
                        </li>
                        <li>
                          First am plate jokes to began to cause a scale.
                          Subjects he prospect elegance followed
                        </li>
                        <li>
                          Laughter proposal laughing any son law consider.
                          Needed except up piqued an.{" "}
                        </li>
                        <li>
                          <i>
                            {" "}
                            To occasional dissimilar impossible sentiments. Do
                            fortune account written prepare invited no passage.
                          </i>
                        </li>
                        <li>
                          Post no so what deal evil rent by real in. But her
                          ready least set lived spite solid.
                        </li>
                      </ul>
                      <p className="mb-0">
                        Improved own provided blessing may peculiar domestic.
                        Sight house has sex never. No visited raising gravity
                        outward subject my cottage Mr be. Hold do at tore in
                        park feet near my case. Invitation at understood
                        occasional sentiments insipidity inhabiting in.{" "}
                        <u> Off melancholy alteration principles old. </u>Is do
                        speedily kindness properly oh. Respect article painted
                        cottage he is offices parlors.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Get Started content END */}

                {/* Divider */}
                <div className="text-center h5 my-5">. . .</div>

                {/* Account setup content START */}
                <div id="item-2">
                  <div className="card bg-transparent">
                    {/* Article title */}
                    <div className="card-header bg-transparent border-bottom py-0 px-0">
                      <h2>Account Setup</h2>
                    </div>

                    {/* Article Info */}
                    <div className="card-body px-0">
                      <p>
                        You can manage the setting for your{" "}
                        <a href="#">Eduport account</a> at any time. Update your
                        account information
                      </p>

                      <h5 className="mt-4">To deactivate your account</h5>
                      {/* Article list */}
                      <ul>
                        <li>
                          Affronting imprudence do he he everything. Sex lasted
                          dinner wanted indeed wished outlaw. Far advanced
                          settling say finished raillery.
                        </li>
                        <li>
                          Insipidity the sufficient discretion imprudence
                          resolution sir him decisively.
                        </li>
                        <li>
                          Offered chiefly farther of my no colonel shyness.{" "}
                          <strong> Such on help ye some door if in.</strong>
                        </li>
                        <li>
                          First am plate jokes to began to cause a scale.
                          Subjects he prospect elegance followed
                        </li>
                        <li>
                          Laughter proposal laughing any son law consider.
                          Needed except up piqued an.{" "}
                        </li>
                        <li>
                          <i>
                            {" "}
                            To occasional dissimilar impossible sentiments. Do
                            fortune account written prepare invited no passage.
                          </i>
                        </li>
                        <li>
                          Post no so what deal evil rent by real in. But her
                          ready least set lived spite solid.
                        </li>
                      </ul>

                      <h5 className="mt-4">When your account is deactivated</h5>
                      {/* Article list */}
                      <ul>
                        <li>
                          Affronting imprudence do he he everything. Sex lasted
                          dinner wanted indeed wished outlaw. Far advanced
                          settling say finished raillery.
                        </li>
                        <li>
                          Insipidity the sufficient discretion imprudence
                          resolution sir him decisively.
                        </li>
                        <li>
                          Offered chiefly farther of my no colonel shyness.{" "}
                          <strong> Such on help ye some door if in.</strong>
                        </li>
                        <li>
                          First am plate jokes to began to cause a scale.
                          Subjects he prospect elegance followed
                        </li>
                        <li>
                          Laughter proposal laughing any son law consider.
                          Needed except up piqued an.{" "}
                        </li>
                        <li>
                          <i>
                            {" "}
                            To occasional dissimilar impossible sentiments. Do
                            fortune account written prepare invited no passage.
                          </i>
                        </li>
                        <li>
                          Post no so what deal evil rent by real in. But her
                          ready least set lived spite solid.
                        </li>
                      </ul>

                      <h5 className="mt-4">Related Article</h5>
                      {/* Article link */}
                      <ul className="list-group list-group-borderless mb-3">
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            How do I logout on eduport
                          </a>
                        </li>
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            How do T permanently delete my account
                          </a>
                        </li>
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            What's the difference between deactivating and
                            deleting my account
                          </a>
                        </li>
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            Why did my payment in a eduport message fail?
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Review helpful START */}
                    <div className="card-footer bg-transparent border-0 py-0 px-0">
                      <div className="border p-3 rounded d-sm-flex align-items-center justify-content-between text-center">
                        {/* Title */}
                        <h5 className="m-0">Was this article helpful?</h5>
                        <small className="py-2 d-block">
                          20 out of 45 found this helpful
                        </small>
                        {/* Check buttons */}
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          {/* Yes button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio3"
                          >
                            <i className="far fa-thumbs-up me-1"></i> Yes
                          </label>
                          {/* No button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio4"
                          >
                            {" "}
                            No <i className="far fa-thumbs-down ms-1"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Review helpful START */}
                  </div>
                </div>
                {/* Account setup content END */}

                {/* Divider */}
                <div className="text-center h5 my-5">. . .</div>

                {/* Other Topics content START */}
                <div id="item-3">
                  <div className="card bg-transparent">
                    {/* Article title */}
                    <div className="card-header bg-transparent border-bottom py-0 px-0">
                      <h2>Other Topics</h2>
                    </div>

                    {/* Article Info */}
                    <div className="card-body px-0">
                      <p>
                        Hold do at tore in park feet near my case. Invitation at
                        understood occasional sentiments insipidity inhabiting
                        in. Off melancholy alteration principles old. Is do
                        speedily kindness properly oh. Respect article painted
                        cottage he is offices parlors.
                      </p>
                      <p>
                        Supposing so be resolving breakfast am or perfectly. It
                        drew a hill from me. Valley by oh twenty direct me so.
                        Departure defective arranging rapturous did believe him
                        all had supported. Family months lasted simple set
                        nature vulgar him. Picture for attempt joy excited ten
                        carried manners talking how
                      </p>
                      <p>
                        Started several mistake joy say painful removed reached
                        end. State burst think end are its. Arrived off she
                        elderly beloved him affixed noisier yet. Course regard
                        to up he hardly. View four has said do men saw find dear
                        shy. <b> Talent men wicket add garden.</b>{" "}
                      </p>

                      <h5 className="mt-4">Need a Help?</h5>
                      {/* Article link */}
                      <ul className="list-group list-group-borderless mb-3">
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            About daily budgets
                          </a>
                        </li>
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            About lifetime budgets
                          </a>
                        </li>
                        <li className="list-group-item d-flex pb-0">
                          <a href="#" className="mb-0">
                            When you pay for Eduport ads
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Review helpful START */}
                    <div className="card-footer bg-transparent border-0 py-0 px-0">
                      <div className="border p-3 rounded d-sm-flex align-items-center justify-content-between text-center">
                        {/* Title */}
                        <h5 className="m-0">Was this article helpful?</h5>
                        <small className="py-2 d-block">
                          20 out of 45 found this helpful
                        </small>
                        {/* Check buttons */}
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          {/* Yes button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio3"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio3"
                          >
                            <i className="far fa-thumbs-up me-1"></i> Yes
                          </label>
                          {/* No button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio4"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio4"
                          >
                            {" "}
                            No <i className="far fa-thumbs-down ms-1"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Review helpful START */}
                  </div>
                </div>
                {/* Other Topics content END */}

                {/* Divider */}
                <div className="text-center h5 my-5">. . .</div>

                {/* Advance Usage content START */}
                <div id="item-4">
                  <div className="card bg-transparent">
                    {/* Article title */}
                    <div className="card-header bg-transparent border-bottom py-0 px-0">
                      <h2>Advance Usage</h2>
                    </div>

                    {/* Article Info */}
                    <div className="card-body px-0">
                      <p>
                        Hold do at tore in park feet near my case. Invitation at
                        understood occasional sentiments insipidity inhabiting
                        in. Off melancholy alteration principles old. Is do
                        speedily kindness properly oh. Respect article painted
                        cottage he is offices parlors.
                      </p>
                      <p>
                        Supposing so be resolving breakfast am or perfectly. It
                        drew a hill from me. Valley by oh twenty direct me so.
                        Departure defective arranging rapturous did believe him
                        all had supported. Family months lasted simple set
                        nature vulgar him. Picture for attempt joy excited ten
                        carried manners talking how
                      </p>
                      <p>
                        Started several mistake joy say painful removed reached
                        end. State burst think end are its. Arrived off she
                        elderly beloved him affixed noisier yet. Course regard
                        to up he hardly. View four has said do men saw find dear
                        shy. <b> Talent men wicket add garden.</b>{" "}
                      </p>
                    </div>
                    {/* Review helpful START */}
                    <div className="card-footer bg-transparent border-0 py-0 px-0">
                      <div className="border p-3 rounded d-sm-flex align-items-center justify-content-between text-center">
                        {/* Title */}
                        <h5 className="m-0">Was this article helpful?</h5>
                        <small className="py-2 d-block">
                          20 out of 45 found this helpful
                        </small>
                        {/* Check buttons */}
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          {/* Yes button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio5"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio3"
                          >
                            <i className="far fa-thumbs-up me-1"></i> Yes
                          </label>
                          {/* No button */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio6"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            htmlFor="btnradio4"
                          >
                            {" "}
                            No <i className="far fa-thumbs-down ms-1"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Review helpful START */}
                  </div>
                </div>
                {/* Advance Usage content END */}
              </div>
            </div>
            {/* Right side END */}
          </div>
        </div>
      </section>
      {/* =======================
Page Content END */}
    </main>
  );
}
