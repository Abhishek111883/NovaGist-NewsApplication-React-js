import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        { name: "USA" },
        { name: "IND" },
        { name: "UK" },
        { name: "AUS" },
        { name: "CAN" },
        { name: "UAE" },
        { name: "SA" },
        { name: "NZ" },
        { name: "SG" },
        { name: "MY" },
        // Add more countries as needed
      ],
      selectedCountry: "Select Country",
      mode: "danger",
    };
  }

  handleCountryClick = (countryName) => {
    this.setState({ selectedCountry: countryName });
    this.props.countryfunction(countryName);
  };

  handleMouseEnter = () => {
    // Open dropdown
    document.querySelector(".dropdown-menu").style.display = "block";
  };

  handleMouseLeave = () => {
    // Close dropdown
    document.querySelector(".dropdown-menu").style.display = "none";
  };

  render() {
    const { title } = this.props;
    const { countries, selectedCountry } = this.state;

    return (
      <div>
        <nav
          className={`navbar nav navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode}`}
          id="nav"
        >
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              {title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                <li className="nav-item">
                  <Link
                    key="home"
                    className="nav-link itemsinnavbar active "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    key="about"
                    className="nav-link itemsinnavbar  "
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <a
                    className="nav-link itemsinnavbar dropdown-toggle "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedCountry}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {countries.map((country, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item "
                          href="#"
                          onClick={() => this.handleCountryClick(country.name)}
                        >
                          {country.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="business"
                    className="nav-link itemsinnavbar  "
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="entertainment"
                    className="nav-link itemsinnavbar  "
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="health"
                    className="nav-link itemsinnavbar  "
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="science"
                    className="nav-link itemsinnavbar  "
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="sports"
                    className="nav-link itemsinnavbar  "
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item mx-1 navitem">
                  <Link
                    key="technology"
                    className="nav-link itemsinnavbar  "
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>

              <div
                className={`form-check form-switch text-${
                  this.props.mode === "dark" ? "white" : "dark"
                } `}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={this.props.toogle}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  {this.props.mode === "dark"
                    ? "Enable Light Mode"
                    : "Enable Dark Mode"}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  countryfunction: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  toogle: PropTypes.func.isRequired,
};
