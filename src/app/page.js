import {Movie} from '../../Components/movie';
import  movies from "../../data/movies.json";
import style from "./page.module.css";
import { input } from "../../Components/style.module.css"
import { Par } from "../../Components/style.module.css";

export default function Home () {
 const movieList = movies.map((movie)=>{
  return <Movie movie={movie} key={movie.Title} />
 });

return (
  <div>
    <p className={Par}> Our Final Web Development Project - ናይ መወዳእታ ፕሮጀክትና ምምዕባል መርበብ ሓበሬታ </p>
    <div className={input}>
     <input type='text'placeholder='search...'/>
        <button>search</button>

    </div>
   
    
    <div className={style.movieContainer}>
    {movieList}</div>
  </div>
);
}
