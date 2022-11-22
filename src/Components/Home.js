import { Navigate, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"
import { birds } from "./bird_names.js";
import "../App.css";
import silhoute from "../emptyBird.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination.js";
import CapturedCard from "./CapturedCard";


const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(30)
    const indexOfLastPost = currentPage*postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = birds.slice(indexOfFirstPost, indexOfLastPost)
    const [search, setSearch] = useState("")
    const {user} = useUserAuth()
   

    const handleChange = (event) => {
      
        setSearch(event.target.value)
    }

    return (
        <>
          <h3 className="WelcomeTitle"> {user?.email} </h3>
          <div class="boxo"> 
          <div class="box">
          <form name="search">
                  <input onChange={handleChange} class="input" placeholder="Search for a specific bird..."/>
             
                  </form>
                  <i class="fas fa-search"></i></div>
                  </div>
             {/* <h4 className="captureTitle">Birds left to capture</h4> */}
           
         
            
           <section className="all-birds">
              {(() => {
               if (search === "") {
                return ( 
                    <>
                    
                      {currentPost.map((bird) => {
                         return (
                           <div className="all-birds">
                            <CapturedCard bird={bird}/>
                           </div>
                         )
                    })}
                      <Pagination postsPerPage={postsPerPage} totalPosts={birds.length} setCurrentPage={setCurrentPage}/>
                    </>
                )
               }
               else if (search !== "") {
                  return birds.map((bird) => {
                    if (bird.toLowerCase().includes(search.toLowerCase())) {
                        return <div className="all-birds">
                            <CapturedCard bird={bird}/>
                        </div>
                    }
                  })
               }
              })()}
              
           </section> 
        </>
    )
}

export default Home