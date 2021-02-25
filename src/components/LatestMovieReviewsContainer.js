import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    // Should have a state property "reviews"
    this.state = {
      reviews: [],
    };
  }

  // Should fetch data from the New York Times API
  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((reveiewData) => this.setState({ reviews: reveiewData.results }));
  }

  render() {
    // Should have top-level element with class "latest-movie-reviews"
    // Should render reviews after reviews state updated
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default LatestMovieReviewsContainer;