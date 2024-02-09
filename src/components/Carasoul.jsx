import { Component } from "react";
import PropTypes from "prop-types";

export default class Carasoul extends Component {
  render() {
    const { news } = this.props;

    // Filter out news items with null or undefined urlToImage
    const filteredNews = news.filter((item) => !!item.urlToImage);

    // Check if filteredNews array is empty
    if (filteredNews.length === 0) {
      return null; // Return null if no articles with valid urlToImage
    }

    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide mb-4"
          data-bs-ride="carousel"
          style={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <div className="carousel-inner">
            {filteredNews.map((image, index) => (
              <div
                key={index}
                className={` carousel-item ${index === 0 ? "active" : ""}  `}
              >
                <img
                  src={image.urlToImage}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                  style={{
                    objectFit: "fill",
                    height: "400px",
                  }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

Carasoul.propTypes = {
  news: PropTypes.array.isRequired,
};
