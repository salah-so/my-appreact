
import { Form } from "../page.module.css";
import { Send } from "../page.module.css";
import { InputFORM } from "../page.module.css";
import { Container } from "../page.module.css";
export default function page () {
return (
   <div className= {Container} 
  >
    <h1>Contact Us</h1>
     <p>please fill in the form below</p>
   <form className={Form}>
      <div>
        <label htmlFor="fullname">Full Name</label>
    <input className={InputFORM} type="text" id="fullname"placeholder="salah som">
     </input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
    <input  className={InputFORM} type="text" id="email"placeholder="salih som@gmail,com">
     </input>
      </div>
      <div>
        <label htmlFor="message">Message</label>
    <textarea className={InputFORM} id="message" placeholder="type your message her......"></textarea>
     
      </div>
      <button className={Send}type="submit">send</button>
   </form>
    
  </div>

  
);
} 