import React from "react";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import { API_URL, API_KEY_3 } from "../utils/api";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      total_pages: null
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevState) {
    if ((prevState.sort_by !== this.state.sort_by) || (prevState.page !== this.state.page) ) {
      this.getMovies();
    }

  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages
        });
      });
  };

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies
    });
  };

  addToMovieWillWatch = (movie) => {
    console.log(movie.title);
    const updateMovies = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovies
    });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMovies = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMovies
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  nextPage = () => {
    if (this.state.page < this.state.total_pages) { 
      this.setState({
        page: this.state.page + 1
      })
    }
  }

  prevPage = () => {
    if (this.state.page > 1) { 
      this.setState({
        page: this.state.page - 1
      })
    }
  }


  render() {
    return (
      <div className="container pt-2">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addToMovieWillWatch={this.addToMovieWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 will-watch">
            <p>Will Watch:</p>
            <ul>
              {this.state.moviesWillWatch.map((movie) => {
                return <li key={movie.id}>{movie.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="text-center w-100 mb-3">
              <button type="button" className="btn btn-outline-primary" onClick={this.prevPage}>Previous</button>
              <span className="px-3">{`Page ${this.state.page} of ${this.state.total_pages}`}</span>
              <button type="button" className="btn btn-outline-primary" onClick={this.nextPage}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
