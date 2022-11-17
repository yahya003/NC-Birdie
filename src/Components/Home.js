import { Navigate, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

const Home = () => {
    
    const {user} = useUserAuth()
    
    return (
        <>
            <h2>Home</h2>
            <h3 className="captureTitle"> Welcome Back {user?.email} </h3>
            <h4 className="captureTitle">Birds left to capture</h4>
            
        </>
    )
}

export default Home