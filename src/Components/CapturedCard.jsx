import silhoute from'../emptyBird.jpg';
import "../App.css";

const ShowCard = ({bird}) => {

    return (
<captured className="captured-card">
        <section className="card-info">
        <img src={silhoute} alt="bird silhoute" width="200" height="200"></img>
        <p className="captured-card-birdname">{bird}</p>

        </section>

    </captured>
  );
};
    
  





export default ShowCard;