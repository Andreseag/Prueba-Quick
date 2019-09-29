import React from 'react'

class Results extends React.Component {
    render(){
        return  <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                        <a className="navbar-brand" href="">Movies & Series</a>
                        <div className=""></div>
                        <input className="form-control mr-sm-2 w-25" type="search" placeholder="Search Movie" aria-label="Search" />
                    </nav>
                    <div>
                        <div className="results">
                            <h2>16 resultados for movie search</h2>
                        </div>
                        <div className="movies"></div>
                    </div>
                </div>
    }
}

export default Results