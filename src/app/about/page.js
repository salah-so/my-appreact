import style   from "../../../Components/style.module.css";
import Image from "next/image";
import Img from "../../../public/mentor nahom.jpg";
import Imag from "../page.module.css";
import Nk from "../../../public/nknahom.png";
import { YouTube } from "../page.module.css";
import {Facebook} from "../page.module.css";
import { List } from "../page.module.css";
export default function about () {
return (
   <div>
   
    <h className= { style.nav}> </h>
    <div className={Imag}>
       <Image src= {Img} placeholder = "blur"alt="nahom" width="460" height="450"></Image>
       <Image src= { Nk } placeholder = "blur"alt="nahom" width="1000" height="450"></Image>

      <h1>Web Development Course for Beginners</h1>
    <ul className={List}>
      <li>Introduction to Programming</li>
      <li>Introduction to Version Control using Git and GitHub</li>
      <li> Introduction to HTML, CSS and Javascript</li>
      <li>Advanced CSS course using Bootstrap CSS Framework</li>
      <li>Advanced Javascript programming</li>
      <li> Introduction to React.JS and Document Object Model (DOM)</li>
      <li>Introduction to HTTP and APIs</li>
      <li>Web Deployment to public</li>
      <li>Final Project e.t.c.</li>
      </ul>
      
      <h4>click here to watch  more of nknahom tech - ንላለ ምስ ቴክኖሎጂ on</h4><a href="https://www.youtube.com/@nknahom"><button className={YouTube}>YouTube</button></a>

      <h4>Visit to See more of Nahom Kibreab on</h4><a href="https://www.facebook.com/nahom.mehanzel"><button className={Facebook}>Facebook</button></a>
     </div>
   </div>
  
  );
};