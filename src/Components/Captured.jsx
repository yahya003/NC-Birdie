import { birds } from "./bird_names.js";
import "../App.css";
import silhoute from "../emptyBird.png";
import ImageCard from "./ImageCard.js";

const Captured = ({setCaught}) => {  
  const name = JSON.parse(localStorage.getItem("name"));
  const img = JSON.parse(localStorage.getItem("img"));
  const uniqueNames = ([...new Set(name)])
  const uniqueImg = ([...new Set(img)])
  console.log(uniqueNames)
  setCaught(uniqueNames.length)
  return (
    <>
      <h3 className="captureTitle">Birds you have captured</h3>
      <ul className="positionBirds">
        {birds.map((bird) => {
          const regex = new RegExp(bird);
          return (
              <ul>
                {uniqueNames.map((birdie, index) => {
                  return (
                    regex.test(JSON.stringify(birdie)) && (
                          <ImageCard birdie={uniqueImg[index]} identity={bird}/>
                    )
                  );
                })}
              </ul>   
          );
         })
        }
      </ul>
    </>
  );
};

export default Captured;
