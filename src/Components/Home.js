import { Navigate, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"

const Home = () => {
    
    const {user} = useUserAuth()
    
    return (
        <>
            <h3 className="captureTitle"> Welcome back {user?.email} </h3>
            <h4 className="captureTitle">Birds left to capture</h4>
            
        </>
    )
}

export default Home