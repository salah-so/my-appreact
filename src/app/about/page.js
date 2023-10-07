import style   from "../../../Components/style.module.css";
import Image from "next/image";
import Img from "../../../public/mentor nahom.jpg";
import Imag from "../page.module.css";
import Nk from "../../../public/nknahom.png";
export default function about () {
return (
   <div>
   
    <h className= { style.nav}> </h>
    <div className={Imag}>
       <Image src= {Img} placeholder = "blur"alt="nahom" width="460" height="450"></Image>
       <Image src= { Nk } placeholder = "blur"alt="nahom" width="1000" height="450"></Image>

      <h1>Web Development Course for Beginners</h1>
    <ul>
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
      
      <a href="https://www.youtube.com/@nknahom"><h2>Visit to watch more of nknahom tech - ንላለ ምስ ቴክኖሎጂ on youtube!</h2></a>
      <a href="https://www.facebook.com/nahom.mehanzel"><h2>Visit to See more of Nahom Kibreab on Facebook!</h2></a>
     </div>
   </div>
  
  );
};