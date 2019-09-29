import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
      // console.log("trying to view movie")
      // console.log(this.props.movie.title)
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
    }
    render() {
        return <div className="movie position-relative my-4" key={this.props.movie.id}>
                  <img width="300" alt="poster  " src={this.props.movie.poster_src} />
                  <div className="movie-title position-absolute d-flex flex-column align-items-center py-4">
                    <h3 className="text-center mb-2">{this.props.movie.Title}</h3>
                    {/* <p>{this.props.movie.overview}</p> */}
                    <p>{this.props.movie.Year}</p>
                    {/* <input className="btn btn-primary" type="button" onClick={this.viewMovie.bind(this)} value="View"/> */}
                  </div>
                </div>
    }
}


export default MovieRow