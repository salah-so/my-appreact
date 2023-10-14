"use client";
import {SearchMovie} from "../Components/style.module.css"
import { useState } from "react";
import {SearchIcon} from "../Components/style.module.css";
export default function search({apikey}){
const [state, setstate]= useState("");
  // function
  const searchMovie =async (event)=>{
event.preventDefault();

const searchTitle = event.target.movieTitle.value;

if (searchTitle === ""){
  setstate("");
}
const convertedMovieTitle = searchTitle.replace(/ /g, "+");
const getMovieFromAPI = await fetch (
  `http: //www.omdbapi.com/?t=${convertedMovieTitle}&apikey=${apikey}`
);

const moviejson =await getMovieFromAPI.json();
setstate (moviejson);

  } 
  
  return(
    <div>
      
      <form onSubmit={searchMovie}>
      <input className={SearchMovie} type="texy"
          name="movieTitle"
          id="movieTitle"
          placeholder="search for movie"/>
         <button className={SearchIcon}type="submit">Search</button>
      </form>
     {state ? <Movie movie ={state}/>:undefined}
    </div>
   
  );
}