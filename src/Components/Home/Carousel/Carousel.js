import React from 'react'
import '../../../Style/Carousel/Carousel.css';
import backimg from "../../../Assets/2.svg";
import backimg1 from "../../../Assets/3.svg";
import whatsapp from "../../../Assets/whatsapp.png"
import instagram from "../../../Assets/instagram.png"
import linkedin from "../../../Assets/linkedin.png"
import { Link } from "react-router-dom";
export default function Carousel() {
  return (
    <>
      <section className="carousel-section">
    <div className="container">
    <div className="carousel-wrapper">
      <div className="first-carousel">
        <h2>Your partner in the key moments of your parenting journey</h2>
        <p>Helping parents thrive by re-imagining access to life-changing parenting support.</p>
        <div className="first-carousel-count">
          <div className="box">
            <div className="number"><span>200</span>+</div>
            <div className="tittle">Experts</div>
          </div>
          <div className="box">
          <div className="number"><span>200</span>+</div>
          <div className="tittle">Careers</div>
          </div>
          <div className="box">
          <div className="number"><span>200k</span>+</div>
          <div className="tittle">Users</div>
          </div>
        </div>
        <Link to="/" className="btn btn-lg btn-danger">GET SUPPORT</Link>
      </div>
      <div className="second-carousel">
        <div className="second-carousel-img">
          <img src={backimg} alt="second-caro-img" className="second-carousel-first-img"/>
          <img src={backimg1} alt="second-caro-img" className="second-carousel-second-img"/>
        </div>
        <div className="second-carousel-join-community">
          <div className="d-flex justify-content-between align-items-center">
            <div className="tittle">Join our parenting community:</div>
            <div className="share-button">
              <ul>
                <li>
                  <Link to="/">
                    <img src={whatsapp} alt="whatsapp"/>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={instagram} alt="instagram"/>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={linkedin} alt="linkedin"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
        </>
  );
}

