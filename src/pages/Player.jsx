import React, { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSmashystreamUrl, getSuperembedUrl, get2embedUrl } from '../movies'
import { useState } from 'react'
import Contextpage from '../Contextpage'
import { HiChevronLeft } from "react-icons/hi";


const Player = () => {

    const { setHeader } = useContext(Contextpage);
    const [moviedet, setMoviedet] = useState([]);
    const { id } = useParams()

    const APIKEY = import.meta.env.VITE_API_KEY;
    const fetchMovie = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
        );
        const moviedetail = await data.json();
        setMoviedet(moviedetail);
    };

      useEffect(() => {
        fetchMovie()
        setHeader("Player")
      }, []);
      
    
    document.title = `Watch ${moviedet.title} | GoMovie`;
	let backdrop = `https://image.tmdb.org/t/p/original${moviedet.backdrop_path}`;
	
	$("#my-video").click(function(){
		$('#modal-watch').modal('show');
	});

    return (
      <>
        <button onClick={()=>history.back()} className='fixed z-10 text-4xl text-black bg-white m-3 md:m-5 rounded-full'><HiChevronLeft /></button>
<video id="my-video" class="video-js" controls preload="auto" width="100%" height="100%" poster={backdrop} data-setup="{}"><source src="https://raw.githubusercontent.com/senamjempol/senamjempol.github.io/main/Movie.mp4" type="video/mp4" /></video>
      </>
    )
}

export default Player