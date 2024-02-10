import { Component } from "react";
import PropTypes from "prop-types";

export default class NewsItem extends Component {
  render() {
    const { title, mydesc, imgSrc, linkUrl, Author, date } = this.props;
    const truncatedTitle =
      title && title.length > 75 ? title.substring(0, 75) + "..." : title;
    const truncatedDesc =
      mydesc && mydesc.length > 100 ? mydesc.substring(0, 100) + "..." : mydesc;

    return (
      <div>
        <div className="card ">
          <img
            src={imgSrc}
            className="card-img-top"
            alt="..."
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{truncatedTitle}</h5>
            <p className="card-text">{truncatedDesc}</p>
            <p className="card-text">
              <small className="text-muted">
                {!Author ? "Unknown" : Author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string,
  mydesc: PropTypes.string,
  imgSrc: PropTypes.string,
  linkUrl: PropTypes.string,
  Author: PropTypes.string,
  date: PropTypes.string,
  mode: PropTypes.string,
};
