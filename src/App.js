import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.performSearch("")
  }
  
  performSearch(searchTerm){
    const urlString = "http://www.omdbapi.com/?s="+searchTerm+"&apikey=7c5a9a4" 
    // if(searchTerm.length > 0){
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          let results = searchResults.Search
          console.log(results);
          let errorResult = searchResults.Response
          console.log(errorResult)

          if(errorResult != "False"){
            var movieRows = [];
  
            results.forEach((movie) => {
              movie.poster_src = movie.Poster  
              const movieRow = <MovieRow key={movie.imdbID} movie={movie} />
              movieRows.push(movieRow)
            })
            this.setState({rows: movieRows})
          }
          
        },
        error: (xhr, status, err) =>{
          console.error("Failed to fetch data");
        }
      })
    // }
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  
  render(){
    return (
      <div className="main">
        <table className="title-bar pt-4">
          <tbody>
            <tr>
              <td width="8"/>
              <td>
                <h1>Movies & Series</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="search d-flex flex-column justify-content-center align-items-center">
          <input className="form-control" style={{
            fontSize: 24,
            display: "block",
            width: "40%",
            paddingTop: 8,
            paddingButtom: 8,
            paddingLeft: 16,
            borderRadius: 0,
            padding: "1.2em 1em",
            border: 0,
          }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />
          <div className=" mt-4 d-flex">
            <label className="text-white d-flex align-items-center mr-4"><input className="mr-1" type="checkbox" id="cbox1" value="first_checkbox"/>Series</label>
            <label className="text-white d-flex align-items-center"><input className="mr-1" type="checkbox" id="cbox1" value="first_checkbox"/>Peliculas</label>
          </div>
        </div>
        <div>
          <h2>{this.searchTerm}</h2>
        </div>
        <div className="movies d-flex justify-content-between flex-wrap mx-4 mt-5">
          {this.state.rows}
        </div>
        
        
      </div>
    );
  }
}

export default App;
