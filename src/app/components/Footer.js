import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="container">
        {/* widget 1 start */}
        <div className="mt-2 mb-0">
          {/* Social media icon */}
          <ul className="list-inline mb-3 mt-3">
            <li className="list-inline-item">
              <a
                className="btn btn-white btn-sm shadow px-2 text-facebook"
                href="#"
              >
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-white btn-sm shadow px-2 text-instagram"
                href="#"
              >
                <i className="fab fa-fw fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-white btn-sm shadow px-2 text-twitter"
                href="#"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-white btn-sm shadow px-2 text-linkedin"
                href="#"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
