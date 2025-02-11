
import "./sign-in.css"
import Img from "../assets/amico.png"
import Gicon from "../assets/google.png"
import Ficon from  "../assets/Facebook.png"


export default function signin() {
    return(
        <>
        <div className="container">
      <div className="left">
        <div className="content">
          <h1>Welcome to  <p className="superadmin">Super Admin!</p> </h1>
          <p className="content">Manage with power, lead with precision.</p>
          <img src={Img} alt="Super Admin" />
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h1>Sign in to your Super Admin</h1>
          <form>
            <div className=" form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="place" placeholder="arun14@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="place" placeholder="********" />
            </div>
            <a  href="#" className="forgot-password">Forgot Password?</a>
            <button  className="login "type="submit">Log In</button>
            
          </form>
          <div className="social-login">
            <button type="button" className="btn ">
              <i className="fab fa-google"></i><img src={Gicon} alt="google icon"/> Continue with Google
            </button>
            <button type="button" className="btn">
              <i className="fab fa-facebook-f"></i><img src={Ficon} alt="facbook icon"/> Continue with Facebook
            </button>
          </div>
          <div className="sign">
          <p >Don't have an account? <a className="signup"href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
          

       
            
            </>
    )
}
