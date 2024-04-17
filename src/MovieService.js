import React from "react";
import axios from 'axios';

const API_KEY = 'd914204588c40cfc93aabf13fc5bc4b7';
const base_url = 'https://api.themoviedb.org/3';

 export const getMovies = async () => {
    try {
        const response = await axios.get(`${base_url}/movie/popular?api_key=${API_KEY}`);
        return response.data.results;
    } catch(e) {
        console.log(e);
    }
}
