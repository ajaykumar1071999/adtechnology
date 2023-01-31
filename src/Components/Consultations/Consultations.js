import React from "react";
import "../../Style/Consultations/Consultation.css";
import { Link } from "react-router-dom";
import conimg1 from "../../Assets/avatar-4.jpg";

export default function Consultations() {
  return (
    <>
      <section className="consultation-section">
        <div className="section-heading-1">
          <h1>Consultatnts</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-cards">
                <div className="search-box">
                  <input
                    type="search"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
                <div className="search-btn-1">
                  <button className="btn btn-danger">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="All-Cards">
                <div className="row">
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div className="consult-wrap">
                    <div className="consult-card">
                      <div className="consult-img">
                        <img src={conimg1} alt="avtart" />
                      </div>
                      <div className="consult-body">
                        <div className="consultant-name-body">
                          <div className="consultant-name">
                            <Link to="#">
                              <h6>Jan Dubiel</h6>
                            </Link>
                          </div>
                          <div className="consultant-rating">
                            Rating: 0<i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="consultant-exp">
                          <h6>Early Years Specialist</h6>
                          <h6>30 Years</h6>
                        </div>
                        <div className="consultant-fee">
                          <p>₹5000.00 per session</p>
                        </div>
                      </div>
                      <div className="consult-footer">
                        <Link to="#">Book</Link>
                      </div>
                    </div>
                    </div>
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
