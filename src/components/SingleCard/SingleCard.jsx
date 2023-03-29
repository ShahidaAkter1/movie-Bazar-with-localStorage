import React from 'react';

const SingleCard = (props) => {
    // console.log(props);
    const {movie} = props;
    console.log(movie);

    return (
      <div className="movie-card card text-center w-100 m-auto p-4">
        <div className="movie-poster w-25 m-auto">
            <img className='w-75 mb-3' src={movie.poster} alt="" />
        </div>
        <h3>{movie.movieName}</h3>
        <p>{movie.description}</p>
        <div className="timeAndRating d-flex justify-content-around">
            <p>WatchTime: {movie.watchTime}</p>
            <p>Rating: {movie.imdbRating}</p>
        </div>
        <button className='btn btn-info w-75 m-auto'>Book Now</button>
     </div>         
        
    );
};

export default SingleCard;