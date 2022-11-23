import { birds } from "./bird_names.js";
import "../App.css";
import silhoute from "../emptyBird.png";

const Captured = () => {  
  const name = JSON.parse(localStorage.getItem("name"));
  const img = JSON.parse(localStorage.getItem("img"));
  const uniqueNames = ([...new Set(name)])
  console.log(uniqueNames)
  return (
    <>
      <h3 className="captureTitle">Birds you have captured</h3>
      <section className="all-birds">
        {birds.map((bird) => {
          const regex = new RegExp(bird);
          return (
            <div className="captured-card">
              <section className="card-info">
                {uniqueNames.map((birdie, index) => {
                  return (
                    regex.test(JSON.stringify(birdie)) && (
                      <>
                      <img
                        src={img[index]}
                        alt="bird img"
                        width="200"
                        height="200"
                      ></img>
                <p className="captured-card-birdname">{bird}</p>
                </>
                    )
                  );
                })}

              </section>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Captured;
