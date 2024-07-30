import axios from 'axios';

const API_KEY = 'd914204588c40cfc93aabf13fc5bc4b7';

// Function to fetch the  movie details by ID from TMDB API
export async function fetchMovieDetails(movieId) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        console.log("API URL:", response.config.url); 
        console.log("Movie Details Response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Function to fetch similar movies based on a movies id
export async function getSimilarMovies(movieId) {
    try {
        // Fetch details of the selected movie
        const movieDetails = await fetchMovieDetails(movieId);
        console.log("Movie Details:", movieDetails); 
         // Check if genres exists
        if (!movieDetails || !movieDetails.genres || movieDetails.genres.length === 0){
             return [];
        }
        // getting the genres
        const { genres } = movieDetails;
        const features = genres.map((genre) => genre.id);

        // Use features to find similar movies
        const similarMovies = await findSimilarMoviesByFeatures(features);

        return similarMovies;
    } catch (error) {
        console.error('Error fetching similar movies:', error);
        return [];
    }
}



// Function to find similar movies based on features
async function findSimilarMoviesByFeatures(features) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: API_KEY,
                with_genres: features.join(',')
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error finding similar movies:', error);
        return [];
    }
}

