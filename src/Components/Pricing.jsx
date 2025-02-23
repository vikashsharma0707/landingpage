import "../Css/Pricing.css";
import b2 from "../images/task2.webp";
import { FaCommentDollar } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${b2})` }}>
      <section id="pricing" className="pricing">
        <h2><FaCommentDollar /> Pricing Plans</h2>

        <div className="pricing-cards">
          
          <div className="pricing-card">
            <h3>Basic - Free</h3>
            <button   className="pricing-btn">Choose</button>
          </div>

        
          <div className="pricing-card">
            <h3>Pro - $9.99/mo</h3>
            <button className="pricing-btn">Choose</button>
          </div>

          
          <div className="pricing-card">
            <h3>Enterprise - $29.99/mo</h3>
            <button className="pricing-btn">Choose</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
