import {birds} from "../bird_names.js"
import CapturedCard from "./CapturedCard.jsx"

const Captured = () => {

  return (
    <>    
 
    <h3 className="captureTitle">Birds you have captured</h3>
    <section className="all-birds">
    {birds.map((bird) => {
            return (
              <CapturedCard
                bird={bird}
              />
            );
          })}
       
       </section>
        
    </>
)
}
  


export default Captured