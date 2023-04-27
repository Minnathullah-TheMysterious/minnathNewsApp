import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalizeFitstLetter=(word)=>{
    const lowerCase = word.toLowerCase()
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFitstLetter(this.props.category)} - NewsMonkey`
  }

  updateNews=async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.q}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page -1})
    this.updateNews()
  };

  handleNextClick = async () => {
    this.setState({page:this.state.page +1})
    this.updateNews()
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="text-center">NewsMonkey - Top {this.capitalizeFitstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((elements) => {
                return (
                  <div className="col-md-4" key={elements.url}>
                    <NewsItem
                      title={elements.title}
                      description={elements.description}
                      imageUrl={
                        !elements.urlToImage
                          ? "https://c.ndtvimg.com/2023-02/kahdadpg_earth_625x300_25_February_23.jpg"
                          : elements.urlToImage
                      }
                      newsUrl={elements.url}
                      author={elements.author}
                      date={elements.publishedAt}
                      source={elements.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="d-flex justify-content-between container-fluid">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
