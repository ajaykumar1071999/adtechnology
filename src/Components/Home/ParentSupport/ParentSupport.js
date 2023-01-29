import "../../../Style/ParentSupport/ParentSupport.css";
import img1 from  '../../../Assets/parent-supoort-1.png';
import img2 from '../../../Assets/parent-support-2.png';
import img3 from '../../../Assets/parent-supoort-3.png';
import img4 from '../../../Assets/parent-support-4.png';
import img5 from '../../../Assets/parent-support-5.png';
import img6 from '../../../Assets/parent-support-6.png';
import img7 from '../../../Assets/parent-support-7.png';
import img8 from '../../../Assets/parent-support-8.png';
import img9 from '../../../Assets/parent-support-9.png';
import img10 from '../../../Assets/parent-support-10.png';
function ParentSupport() {
  return (
    <>
      <section className="parent-support-section">
        <div className="container">
          <div className="parent-support-heading">
            <div className="d-flex justify-content-between">
              <div className="parent-support-heading-text">
                <h2 className="parent-support-heading-text1">
                  Do you need some support?
                </h2>
              </div>
              <div className="parent-support-heading-ViewAll">
                ViewAll<i className="fa fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="parent-support-heading-pera">
              <p className="parent-support-heading-pera1">Speak to our elite panel of parenting experts</p>
            </div>
          </div>
          <div className="parent-support-card">
          <div className="parent-support-card-container">
          <div className="row">
            
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img1} alt="1"/>
                   </div>
                   <h5 className="parent-support-text">Paediatrician</h5>
                </div>
                </div>
                
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img2} alt="2"/>
                   </div>
                   <h5 className="parent-support-text">Obs & Gynae</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img3} alt="3"/>
                   </div>
                   <h5 className="parent-support-text">Speech</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img4} alt="4"/>
                   </div>
                   <h5 className="parent-support-text">Diet & Nutration</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img5} alt="5"/>
                   </div>
                   <h5 className="parent-support-text">Mental Health</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img6} alt="6"/>
                   </div>
                   <h5 className="parent-support-text">Fertility & Pregnancy</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img7} alt="7"/>
                   </div>
                   <h5 className="parent-support-text">Occupational Therapy</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img8} alt="8"/>
                   </div>
                   <h5 className="parent-support-text">Lactation & Breastfeeding</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img9} alt="9"/>
                   </div>
                   <h5 className="parent-support-text">Special Needs & Disabilities</h5>
                </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                <div className="parent-support-card-content">
                   <div className="parent-support-img">
                    <img src={img10} alt="10"/>
                   </div>
                   <h5 className="parent-support-text">Early Childhood Development</h5>
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
export default ParentSupport;
