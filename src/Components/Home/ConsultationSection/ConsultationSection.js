import "../../../Style/ConsultationSection/ConsultationSection.css";
import conimg1 from "../../../Assets/consultation-img-1.jpg";
import conimg2 from "../../../Assets/consultation-img-2.jpeg";
import conimg3 from "../../../Assets/consultation-img-3.jpg";
import conimg4 from "../../../Assets/consultation-img-4.png";

function ConsultationSection() {
  return (
    <>
      <section className="ConsultationSection">
        <div className="container">
          <div className="heading">
            <div className="d-flex justify-content-between">
              <div class="txt">
                <p>Do you need childcare?</p>
              </div>
              <div className="View-All">
                View All<i className="fa fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="heading-text">
              <h3>Speak to trusted Tllid carers</h3>
            </div>
            <div className="heading-card">
              <div className="row">
                <div className="col-md-3">
                  <div className="course-card">
                    <div className="course-card-image">
                      <img className="img-fluid" src={conimg1}/>
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
                          <a href="#">View Course</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="course-card">
                    <div className="course-card-image">
                    <img className="img-fluid" src={conimg2}/>
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
                          <a href="#">View Course</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="course-card">
                    <div className="course-card-image">
                    <img className="img-fluid" src={conimg3}/>
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
                          <a href="#">View Course</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="course-card">
                    <div className="course-card-image">
                    <img className="img-fluid" src={conimg4}/>
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
                          <a href="#">View Course</a>
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
export default ConsultationSection;
