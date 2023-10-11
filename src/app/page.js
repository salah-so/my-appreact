import {Movie} from '../../Components/movie';
import  movies from "../../data/movies.json";
import style from "./page.module.css";
import { Par } from "../../Components/style.module.css";

export default function Home () {
 const movieList = movies.map((movie)=>{
  return <Movie movie={movie} key={movie.Title} />
 });

return (
  <div>
    <h2 className={Par}> Our Final Web Development Project - ናይ መወዳእታ ፕሮጀክትና ምምዕባል መርበብ ሓበሬታ </h2>
  
    <div className={style.movieContainer}>
    {movieList}

    </div>
  </div>
  
);
}
