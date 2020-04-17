import React from 'react'
import classNames from "classnames";


class MovieItem extends React.Component {

  constructor() {
    super();

    this.state = {
      willWatch: false
    }
  }

  render() {
    
    const {movie, removeMovie, addToMovieWillWatch, removeMovieFromWillWatch} = this.props;
    return(
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title mb-5 mt-2">{movie.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button 
              type="button"   
              className={classNames('btn', 
                                    {'btn-success': this.state.willWatch}, 
                                    {'btn-secondary': !this.state.willWatch}
                                    )}
              onClick={ () => {
                this.setState({
                  willWatch: !this.state.willWatch
                })
                this.state.willWatch ? removeMovieFromWillWatch(movie) : addToMovieWillWatch(movie)
              }}              
            >
              Will Watch
            </button>         
          </div>
        </div>
        {/* <button onClick={removeMovie.bind(null, movie)}>Delete Movie</button> */}
      </div>
    )
  }
}

export default MovieItem;