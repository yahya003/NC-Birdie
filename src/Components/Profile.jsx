import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

const Profile = () => {
    
    const {logout} = useUserAuth()
    const navigate = useNavigate()
    const {user} = useUserAuth()

    const handleLogout = () => {
     logout()
     navigate("/")
    }
 
   
   
  return (
    <>
        <h3>Profile</h3>
        <h4>Username: {user?.email}</h4>
        <h5>?/900 birds found</h5>
        <button className="button" onClick={handleLogout}>Log Out</button>
    </>
   )
}

export default Profile