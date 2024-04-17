import React, { useState, useEffect } from "react";
import { getMovies } from "./MovieService";
import axios from 'axios';
function SearchedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    const fetchMovies = async () => {
      const response = await getMovies();
      setMovies(response)
    }
fetchMovies();
  }, [])
  
      return(
        <div>
           
            {/* {movies.map(movie => (
              <p key={movie.id}>{movie.title}</p>
            ))} */}
        </div>
      )
}

export default SearchedMovies;
