import React from 'react';
import { moviesData } from "../moviesData"
import MovieItem from './MovieItem'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item =>{
      return item.id !== movie.id
    })
  
    this.setState({
      movies: updateMovies
    })
  }

  addToMovieWillWatch = movie => {
    const updateMovies = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovies
    });
  }

  removeMovieFromWillWatch = movie => {
    const updateMovies = this.state.moviesWillWatch.filter(item =>{
      return item.id !== movie.id
    })
  
    this.setState({
      moviesWillWatch: updateMovies
    })
  }

  render() {

    return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">  
            {this.state.movies.map(movie => {
              return ( 
                <div className="col-6 mb-4" key={movie.id} >
                  <MovieItem 
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addToMovieWillWatch={this.addToMovieWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                  />
                </div>
              )
            })}       
          </div>
        </div>
        <div className="col-3">
          <p>Will Watch: {this.state.moviesWillWatch.length}</p>
        </div>
      </div>  
    </div>
    );
  }
}

export default App;
