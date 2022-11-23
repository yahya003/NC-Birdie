import "babel-polyfill";
import silhoute from "../emptyBird.png";
import * as tf from "@tensorflow/tfjs";
import { MobileNet } from "./mobilenet";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
window.$ = $;

const Capture = () => {
  const [birdieImage, setbirdieImage] = useLocalStorage("birdieImage", []);
  const [birdieName, setbirdieName] = useLocalStorage("birdieName", []);
  const [disableButton, setDisableButton] = useState(true)
  const navigate = useNavigate();

 

  const addToCaptured = (e) => {
    e.preventDefault();
    navigate("/captured");
  };
  const findBird = (e) => {
    e.preventDefault();
    const idBtn = $("#identifyBtn");
    const results = $("#results");
    const hiddenImage = $("#birdImage");
    const fileUpload = $("#fileUpload");
    const mobileNet = new MobileNet();
    mobileNet
      .load()
      .then(() => {
        console.log("loaded");
        idBtn.prop("disabled", false);
      })
      .catch((err) => {
        console.log(err);
      });

    idBtn.on("click", (evt) => {
      evt.preventDefault();
      idBtn.prop("disabled", true);
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setbirdieImage([...birdieImage, reader.result]);
        hiddenImage[0].src = reader.result;
      });

      reader.readAsDataURL(fileUpload.prop("files")[0]);

      const bird = document.getElementById("birdImage");
      bird.onload = async () => {
        bird.width = "224";
        bird.height = "224";
        const image = tf.browser.fromPixels(bird);
        let result = mobileNet.predict(image);
        const topK = mobileNet.getTopKClasses(result, 1);
        var res = "";
        topK.forEach((ele) => {
          res += ele.label + "</br>";
        });
        const birdieImg = results.html(res);
        setbirdieName([...birdieName, birdieImg[0].innerText]);
        results.html(res);
        idBtn.prop("disabled", false);
      };
    });
  };
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(birdieName));
    localStorage.setItem("img", JSON.stringify(birdieImage));
  }, [birdieName, birdieImage]);

  return (
    <div className="alignment">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-left">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="fileUpload">Upload a bird's photo</label>
                <input
                  className="form-control"
                  id="fileUpload"
                  type="file"
                  onChange={(e) => {
                    findBird(e);
                  }}
                />
              </div>

              <button id="clearAllBtn" className="btn btn-danger">
                Clear All
              </button>
              <button
                id="identifyBtn"
                onClick={(e) => {
                  setDisableButton(false)
                  findBird(e);
                }}
                className="btn btn-success"
                
              >
                Identify
              </button>
            </form>
            
            {birdieName && (
              <button disabled = {disableButton}
                onClick={(e) => {
                  addToCaptured(e);
                }} className="button"
              >
                click to add to captured
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8" id="results"></div>
          <div className="col-md-4">
            <img
              height="224px"
              width="224px"
              id="birdImage"
              alt="bird img"
              src={silhoute}
            />
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      ></script>
    </div>
  );
};

export default Capture;
