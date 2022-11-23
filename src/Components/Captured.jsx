import "../App.css";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useUserAuth } from "../context/UserAuthContext";
import CapturedCard from "./CapturedCard";

const Captured = () => {
  const [birdData, setbirdData] = useState([]);
  const [loading, setloading] = useState(true);
  const { user } = useUserAuth();
  const birdsCollectionRef = collection(db, `${user.reloadUserInfo.localId}`);

  useEffect(() => {
    setloading(true);
    const getbirds = async () => {
      const data = await getDocs(birdsCollectionRef);
      const birdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setbirdData(JSON.parse(birdData[0].birds));
      setloading(false);
    };
    getbirds();
  }, []);
  if (loading) return <div>loading...</div>;

  return (
    <>
      <h3 className="captureTitle">Birds you have captured</h3>
      <section className="all-birds">
        {birdData.map((bird, index) => {
          return (
            <div key={bird + index} className="all-birds">
              <CapturedCard bird={bird} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Captured;
