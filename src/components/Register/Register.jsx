import React from "react";
import "./register.css";
import Mingalogo from "../../image/minga-logo.png";
import Profile from "../../image/profile.png";
import Lock1 from "../../image/lock1.png";
import Correo from "../../image/@.png";
import Google from "../../image/Google.png";

export default function Register() {
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
      <form className="form">
        <fieldset>
          <legend>Name</legend>
          <input type="text" name="name" id="name" placeholder="Krowl bell" />
          <img src={Profile} alt="profile"/>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input  type="email" name="name" id="name"  placeholder="DragonBallZ@Krowl.com" />
          <img src={Correo} alt="email"/>
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" name="name" id="name" placeholder="********" />
          <img src={Lock1} alt="lock"/>
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" name="name" id="name" placeholder="********" />
          <img src={Lock1} alt="lock"/>

        </fieldset>
        <fieldset className="notification-check">
          <input  className="check-box" type="checkbox"  name="email-notification" id="email-notification" />
          <label htmlFor="email-notification">
            Send notification to my mail
          </label>
        </fieldset>
        <a href="#" className="sing-up"> Sing up </a>
        <a href="#" className="sing-in-google"> <img src={Google} alt="google-icon" />  Sing in with Google </a>
        <p> Already have on account? <a href="#" className="link">  Log in </a> </p>
        <p> Go back to  <a href="#" className="link"> home page </a> </p>
      </form>
    </div>
  );
}
