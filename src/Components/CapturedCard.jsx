import silhoute from "../emptyBird.png";
import "../App.css";
import Pagination from './Pagination';


const CapturedCard = ({ bird, birdimg }) => {
  return (
    <captured className="captured-card">
      <section className="card-info">
        <img src={birdimg || silhoute} alt="bird silhoute" width="200" height="200"></img>
        <p className="captured-card-birdname">{bird}</p>
      </section>
    </captured>
  );
};

export default CapturedCard;
