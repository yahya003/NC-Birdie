import { NavLink } from "react-router-dom"

const SignIn = () => {
    return (
        <div className="signInPage">

        <h1>Sign in</h1>
        <form id="form" >
          <label htmlFor="email">Username: </label>
            <input placeholder="email" id="email" required/>
            <br/>
    
          <label htmlFor="password">Password: </label>
            <input type="password" id="password"  required /> 
        </form>

        <button className="signIn">Sign in</button>
        <br/>

        
        </div>
      )
}


export default SignIn