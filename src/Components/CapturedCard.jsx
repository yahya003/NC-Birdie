import silhoute from "../emptyBird.png";
import "../App.css";


const CapturedCard = ({ bird }) => {
  const name = JSON.parse(localStorage.getItem("name"));
  const img = JSON.parse(localStorage.getItem("img"));
  const regex = new RegExp(bird);
  return (
    <div className="captured-card">
      <section className="card-info">        
        {name.map((birdie, index) => {
          return (
            regex.test(JSON.stringify(birdie)) && (
              <img
                src={img[index]}
                alt="bird img"
                width="200"
                height="200"
              ></img>
            )
          );
        })}
        <img src={silhoute} alt="bird silhoute" width="200" height="200"></img>
        <p className="captured-card-birdname">{bird}</p>
      </section>
    </div>
  );
};

export default CapturedCard;
