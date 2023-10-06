import Link from "next/link";
import style   from "./style.module.css";

export const NavBar = () => {

   return (
   <div className= { style.nav}>

    <Link href="/">
        <div> Home </div>
        </Link>


   <Link href="/about">
        <div>
          about
        </div>
         </Link>

   <Link href="/contact">
        <div>
          contact
        </div>
        </Link>

      </div>

      ) 

      } ;

