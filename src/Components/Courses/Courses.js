import React from "react";
import "../../Style/Courses/Courses.css";
import { Link } from "react-router-dom";
import coursevideo from "../../Assets/Video/1.mp4";
import hanumanji from "../../Assets/hanuman-ji.jpg";
import paint from "../../Assets/paint-palette.png";
import salon from "../../Assets/salon.png";
import truck from "../../Assets/moving-truck.png";

export default function Courses() {
  return (
    <>
      <section className="courses-section">
        <div className="container">
          <div className="text">
            <h1>Courses</h1>
          </div>
        </div>
      </section>

      <section className="all-courses">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="all-courses-preview">
                <div className="filter-courses">
                  <div className="filter-by">
                    <p>
                      <b>Filter</b> By
                    </p>
                  </div>
                  <div className="filter-select">
                    <select name="courses">
                      <option value="none">None</option>
                      <option value="populer">Populer</option>
                      <option value="trending">Trending</option>
                      <option value="featured">Featured</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="courses-card">
                <div className="row">
                  <div className="col-md-4">
                    <div className="course-card">
                      <div className="course-card-image">
                        <video
                          src={coursevideo}
                          controls="controls"
                          className="img-fluid"
                        ></video>
                      </div>
                      <div className="course-details">
                        <div className="d-flex justify-content-between">
                          <div className="course-name">
                            <h6>The Informed Parenting Program</h6>
                          </div>
                          <div className="course-duration">
                            <p>6 hrs</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="course-consultations">
                            <p>Jan Dubiel</p>
                          </div>
                          <div>
                            Rating <i className="fa fa-star text-warning"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="course-price">
                            ₹<del>20000.00</del>
                            /- ₹19000.00/
                          </div>
                        </div>

                        <div className="course-footer">
                          <div className="view-course">
                            <Link to="/CourseSection">View Course</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="course-card">
                      <div className="course-card-image">
                        {/* <video
                        src={coursevideo}
                        controls="controls"
                        className="img-fluid"
                      ></video> */}
                        <img src={paint} alt="course-image" />
                      </div>
                      <div className="course-details">
                        <div className="d-flex justify-content-between">
                          <div className="course-name">
                            <h6>The Informed Parenting Program</h6>
                          </div>
                          <div className="course-duration">
                            <p>6 hrs</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="course-consultations">
                            <p>Jan Dubiel</p>
                          </div>
                          <div>
                            Rating <i className="fa fa-star text-warning"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="course-price">
                            ₹<del>20000.00</del>
                            /- ₹19000.00/
                          </div>
                        </div>

                        <div className="course-footer">
                          <div className="view-course">
                            <Link to="/CourseSection">View Course</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="course-card">
                      <div className="course-card-image">
                        {/* <video
                        src={coursevideo}
                        controls="controls"
                        className="img-fluid"
                      ></video> */}

                        <img src={hanumanji} alt="course-image" />
                      </div>
                      <div className="course-details">
                        <div className="d-flex justify-content-between">
                          <div className="course-name">
                            <h6>The Informed Parenting Program</h6>
                          </div>
                          <div className="course-duration">
                            <p>6 hrs</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="course-consultations">
                            <p>Jan Dubiel</p>
                          </div>
                          <div>
                            Rating <i className="fa fa-star text-warning"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="course-price">
                            ₹<del>20000.00</del>
                            /- ₹19000.00/
                          </div>
                        </div>

                        <div className="course-footer">
                          <div className="view-course">
                            <Link to="/CourseSection">View Course</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="course-card">
                      <div className="course-card-image">
                        {/* <video
                        src={coursevideo}
                        controls="controls"
                        className="img-fluid"
                      ></video> */}

                        <img src={salon} alt="course-image" />
                      </div>
                      <div className="course-details">
                        <div className="d-flex justify-content-between">
                          <div className="course-name">
                            <h6>The Informed Parenting Program</h6>
                          </div>
                          <div className="course-duration">
                            <p>6 hrs</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="course-consultations">
                            <p>Jan Dubiel</p>
                          </div>
                          <div>
                            Rating <i className="fa fa-star text-warning"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="course-price">
                            ₹<del>20000.00</del>
                            /- ₹19000.00/
                          </div>
                        </div>

                        <div className="course-footer">
                          <div className="view-course">
                            <Link to="/CourseSection">View Course</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="course-card">
                      <div className="course-card-image">
                        {/* <video
                        src={coursevideo}
                        controls="controls"
                        className="img-fluid"
                      ></video> */}

                        <img src={truck} alt="course-image" />
                      </div>
                      <div className="course-details">
                        <div className="d-flex justify-content-between">
                          <div className="course-name">
                            <h6>The Informed Parenting Program</h6>
                          </div>
                          <div className="course-duration">
                            <p>6 hrs</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="course-consultations">
                            <p>Jan Dubiel</p>
                          </div>
                          <div>
                            Rating <i className="fa fa-star text-warning"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="course-price">
                            ₹<del>20000.00</del>
                            /- ₹19000.00/
                          </div>
                        </div>

                        <div className="course-footer">
                          <div className="view-course">
                            <Link to="/CourseSection">View Course</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="all-courses-view">
                <div className="find-all-courses">
                  <div className="container">
                    <h1>find your courses.</h1>
                    <br />
                    <div className="courses-category">
                      <label>Category</label>
                      <select name="courses-category">
                        <option value="Select Category">Select Category</option>
                        <option value="Early Years">Early Years</option>
                        <option value="Red Owl: Learning For Life">
                          Red Owl: Learning For Life
                        </option>
                        <option vlaue="quiz category">quiz Category</option>
                        <option vlaue="Test Category">Test Category</option>
                      </select>
                    </div>
                    <div className="search-form">
                      <label>Search by any word(s)</label>
                      <input type="search" placeholder="Search By"></input>
                    </div>
                    <div className="search-btn ">
                      <button className="btn btn-danger">Search</button>
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
