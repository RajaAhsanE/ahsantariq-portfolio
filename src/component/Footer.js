import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/ahsan-tariq-5035a227b"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".5s">
              <a
                href="https://www.facebook.com/share/1ABdTqoXNq/"
                target="newtab"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://wa.me/923125992836"
                target="newtab"
              >
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".3s">
              <a
                href="https://www.upwork.com/freelancers/~01829ff2578e45668a?mp_source=share"
                target="newtab"
              >
                <i className="fa fa-briefcase" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Ahsan Tariq.</h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
