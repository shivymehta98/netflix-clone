import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // a snippet of code which runs on specific conditions
    // if [], run once when the row loads and dont run again 
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results)
            setMovies(request.data.results);
            return request;
            //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
        }
        fetchData();
    }, [fetchUrl]);
   console.log(movies)
    return (
        <div className = "row">
                        <h2>{title}</h2>

            <div className = "row_posters">
                {/* row postsers */}
                    {movies.map(movie => (
                    <img key = {movie.id} className = {`row_poster ${isLargeRow && "row_posterLarge"}`} src = {`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt = {movie.name}/>
                ))}

            </div>

        </div>
    )
}

export default Row
