import { birds } from "./bird_names.js";
import "../App.css";

import silhoute from "../emptyBird.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination.js";

const Captured = () => {
 const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(30)

  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = birds.slice(indexOfFirstPost, indexOfLastPost)
  
  let location = useLocation();
  let name = "";
  console.log(location);
  if (location.state) {
    name = location.state.birdieName;
  }
  return (
    <>
      <h3 className="captureTitle">Birds you have captured</h3>
      <Pagination postsPerPage={postsPerPage} totalPosts={birds.length} setCurrentPage={setCurrentPage}/>
      <section className="all-birds">
        {birds.map((bird) => {
          const regex = new RegExp(bird);
          return (
            <captured className="captured-card">
              <section className="card-info">
                {regex.test(JSON.stringify(name)) ? (
                  <img
                    src={location.state.birdieImage}
                    alt="bird img"
                    width="200"
                    height="200"
                  ></img>
                ) : (
                  <img
                    src={silhoute}
                    alt="bird silhoute"
                    width="200"
                    height="200"
                  ></img>
                )}

                <p className="captured-card-birdname">{bird}</p>
              </section>
            </captured>
          );
        })}
      </section>
    </>
  );
};

export default Captured;
