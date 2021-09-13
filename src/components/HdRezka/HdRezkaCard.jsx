import React from "react";

export class HdRezkaCard extends React.Component {
    render(){
        const { moviePosterUrl, movieTitle, movieYear, movieCountry, movieCatagory } = this.props;
        return (
            <div className='rezkaPost'>
            <div><img className='moviePoster' src={moviePosterUrl} alt="poster" /></div>
              <div className="movieDescription"> 
                <p className="movieTitle">{movieTitle}</p>
                <p className="movieYear">{movieYear}</p>
                <p className="movieCountry">{movieCountry}</p>
                <p className="movieCatagory">{movieCatagory}</p>
                </div> 
            </div>
      
        );
    }
}