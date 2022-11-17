import {birds} from "./bird_names.js"
import CapturedCard from "./CapturedCard.jsx"
import "../App.css";
import { useState } from "react";
import Pagination from "./Pagination.js";

const Captured = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(30)

  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = birds.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>    
 
    <h3 className="captureTitle">Birds you have captured</h3>
    <Pagination postsPerPage={postsPerPage} totalPosts={birds.length} setCurrentPage={setCurrentPage}/>
    <section className="all-birds">
    
    {currentPost.map((bird) => {
            return (
              <CapturedCard bird={bird}/>
            );
          })}
       
       </section>
        
    </>
)
}
  


export default Captured