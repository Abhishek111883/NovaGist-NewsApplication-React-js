import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apikey = import.meta.env.VITE_API_KEY;

  constructor(props) {
    super(props);
    this.state = {
      country: "in", // Initialize the state
      mode: "danger",
      progress: 0,
    };
  }
  handleProgress = (progress) => {
    this.setState({ progress: progress });
  };

  toogle = () => {
    if (this.state.mode === "danger") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "black";
    } else {
      this.setState({ mode: "danger" });
      document.body.style.backgroundColor = "white";
    }
  };

  countryfunction = (countryname) => {
    const countryMapping = {
      USA: "us",
      IND: "in",
      UK: "gb",
      AUS: "au",
      CAN: "ca",
      UAE: "ae",
      SA: "za",
      NZ: "nz",
      SG: "sg",
      MY: "my",
      // Add more countries and their corresponding country codes as needed
    };

    const selectedCountryCode = countryMapping[countryname];

    if (selectedCountryCode) {
      this.setState({ country: selectedCountryCode });
      console.log(countryname);
    }
  };

  render() {
    return (
      <>
        <Router>
          <Navbar
            title="NovaGist"
            USA=" USA"
            IND=" IND"
            UK="UK"
            AUS="AUS"
            CAN="CAN"
            UAE="UAE"
            SA="SA"
            NZ="NZ"
            SG="SG"
            MY="MY"
            countryfunction={this.countryfunction}
            mode={this.state.mode}
            toogle={this.toogle}
          />
          <LoadingBar
            color="#0B2447"
            progress={this.state.progress}
            height={3}
            onLoaderFinished={() => this.setState({ progress: 0 })}
          />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="general"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            {/* //Todo About */}
            <Route
              path="/business"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="business"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="entertainment"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="health"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="science"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="sports"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  mode={this.state.mode}
                  country={this.state.country}
                  category="technology"
                  setprogress={this.handleProgress}
                  apikey={this.apikey}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
