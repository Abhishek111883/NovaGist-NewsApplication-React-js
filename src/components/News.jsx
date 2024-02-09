import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [], // Initialize the state
      page: 1,
      isLoading: false,
      totalresults: 0,
    };
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  // Inside the News component
  async componentDidUpdate(prevProps) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category
    ) {
      await this.fetchNews();
      // Fetch news using the updated country prop
    }
  }

  fetchNews = async () => {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=929948cf19164f63b1795a3be43e1e46&page=${this.state.page}&pageSize=10`;
    console.log(this.props.country);
    this.setState({ isLoading: true });
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedData = await data.json();
    this.props.setprogress(70);
    console.log(parsedData);
    this.setState({
      news: parsedData.articles,
      isLoading: false,
      totalresults: parsedData.totalResults,
    });
    this.props.setprogress(100);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=929948cf19164f63b1795a3be43e1e46&page=${this.state.page}&pageSize=10`;
    console.log(this.props.country);
    this.setState({ isLoading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      news: this.state.news.concat(parsedData.articles),
      totalresults: parsedData.totalResults,
      isLoading: false,
    });
  };

  render() {
    const { mode } = this.props;

    return (
      <>
        <h1
          className="text-center my-4"
          style={{
            color: mode === "dark" ? "white" : "black",
          }}
        >
          Top-Headlines from {this.props.category}
        </h1>
        <div className="d-flex justify-content-between my-3 mx-2">
          <div className="categoryfrombottom">
            <h3 className="text-danger display-line">
              Category:{" "}
              <span
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {this.props.category}
              </span>
            </h3>
          </div>
          <div className="countryfrombottom">
            <h3 className="text-danger display-line">
              Country:{" "}
              <span
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {this.props.country}
              </span>
            </h3>
          </div>
        </div>

        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchMoreData}
          hasMore={this.state.news.length < this.state.totalresults}
          loader={<Spinner />}
        >
          <div className="container-fluid ">
            <div className="row g-4 ">
              {this.state.news.map((element) => {
                // Check if urlToImage is null or undefined, and skip rendering if it is
                if (!element.urlToImage) {
                  return null; // Skip rendering this NewsItem
                }

                return (
                  <div
                    className="col-md-3"
                    key={element.url}
                    style={{
                      minHeight: "300px",
                    }}
                  >
                    <NewsItem
                      title={element.title}
                      mydesc={element.description}
                      imgSrc={element.urlToImage}
                      linkUrl={element.url}
                      Author={element.author}
                      date={element.publishedAt}
                      mode={mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setprogress: PropTypes.func,
};
