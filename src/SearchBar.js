import React, { useState } from "react";
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: 'd914204588c40cfc93aabf13fc5bc4b7',
          query: query
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center mt-4'>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      <div className="mt-4">
        <h1 className='text-2xl text-white flex flex-col items-start mb-4'>
          {loading ? 'Searching movies...' : 'Searched Movies'}
        </h1>
        <div className="grid grid-cols-4 gap-4 justify-center">
          {searchResults.map((movie, index) => (
            <div key={movie.id} className={`transition-opacity delay-${index + 1} opacity-0 ${loading ? '' : 'opacity-100'}`}>
              <div className="flex flex-col items-center">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-40 h-auto'/>
                <p className='text-white mt-2'>{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
