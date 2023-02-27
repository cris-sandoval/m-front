import {useRef} from "react";
import "./register.css";
import axios from "axios";
import Mingalogo from "../../image/minga-logo.png";
import Profile from "../../image/profile.png";
import Lock1 from "../../image/lock1.png";
import Correo from "../../image/@.png";
import Google from "../../image/Google.png";

export default function Register() {
  
  
  let name = useRef()
  let email = useRef()
  let password = useRef()
  let password2 = useRef()
  let check = useRef()
  
 async function handleSubmit(event){
    
    event.preventDefault()
    // console.log(name.current);
    // console.log(name.current.id);
    // console.log(name.current.value);
    // console.log(email.current.id); 
    // console.log(email.current.value); 
    // console.log(password.current.id);
    // console.log(password.current.value);
    // console.log(password2.current.id);
    // console.log(password2.current.value);
    // console.log(check.current.id);
    // console.log(check.current.value);
    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    }
    console.log(data)
    let url = "http://localhost:8080/users"
    try{
      await axios.post(url, data)
      console.log("enviado corre");
    } catch(error){
      console.log(error);
      console.log("ocurrio un error");
    }
    
  }
  
  return (
    <div className="register">
      <div className="welcomesection">
        <div className="minga-log-container">
          <img className="minga-log" src={Mingalogo} alt="minga-log"></img>
        </div>
        <div className="text-register">
          <h1 className="welcome">welcome!</h1>
          <p className="discover">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit} >
        <fieldset>
          <legend htmlFor="name">Name</legend>
          <input ref={name} type="text" name="name" id="name" required placeholder="Krowl bell" />
          <img src={Profile} alt="profile"/>
        </fieldset>
        <fieldset>
          <legend htmlFor="email">Email</legend>
          <input  ref={email} type="email" name="email" id="email" required placeholder="DragonBallZ@Krowl.com" />
          <img src={Correo} alt="email"/>
        </fieldset>
        <fieldset>
          <legend htmlFor="password">Password</legend>
          <input ref={password} type="password" name="password" id="password" required placeholder="********" />
          <img src={Lock1} alt="lock"/>
        </fieldset>
        <fieldset>
          <legend htmlFor="password2">Confirm Password</legend>
          <input ref={password2} type="password" name="password2" id="password2" required placeholder="********" />
          <img src={Lock1} alt="lock"/>
        </fieldset>
        <fieldset  htmlFor="check" className="notification-check">
          <input  ref={check} className="check-box" type="checkbox"  name="check" id="check" required />
          <label htmlFor="email-notification">
            Send notification to my mail
          </label>
        </fieldset>
        <input type="submit" className="sing-up" value="Sign in" ></input> 
        {/* <a href="#"  type="submit" > Sign up </a> */}
        <a href="#" className="sing-in-google"> <img src={Google} alt="google-icon" />  Sing in with Google </a>
        <p> Already have on account? <a href="#" className="link">  Log in </a> </p>
        <p> Go back to  <a href="#" className="link"> home page </a> </p>
      </form>
    </div>
  );
}
