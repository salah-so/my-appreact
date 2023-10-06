import Image from "next/image";
import style from './style.module.css'

export const Movie = ({movie}) =>{
  return (
 <div className={style.movieList}>
     <div>
      <h1>{movie.Title}</h1>
      <p>{movie.year}</p>
      <p>{movie.Rated === "N/A" ? undefined : movie.Rated}</p>
      <Image src={movie.Poster === "N/A" ? "/placeholder-image.png": movie.Poster} alt={movie.Title} width={300} height={410} />
  </div>
 </div>
  );
};