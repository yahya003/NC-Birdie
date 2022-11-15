import { NavLink } from "react-router-dom"

const SignUp = () => {
    return (
        <div className="signUpPage">
          <h1>Sign Up</h1>
          <form id="form" >
            <label htmlFor="email">Username: </label>
             <input id="email" required/>
             <br/>
    
          <label htmlFor="password">Password: </label>
            <input type="password"  id="password"  required /> 
          </form>

        <button className="button">Sign Up</button>
        <br/>
        <NavLink to ="/">Already have an account? Log In</NavLink>
        </div>
      )
}


export default SignUp