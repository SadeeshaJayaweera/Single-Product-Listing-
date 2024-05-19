import Sneakers from "./Sneakers";
import { useState, useEffect, useRef } from "react";
import cartImg from "../images/img1.jpg";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";  // Importing icons

const Herosec = () => {
  const [cart, setCart] = useState(0);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    if (cart === 0) {
      myRef1.current.style.display = "none";
      myRef2.current.style.display = "none";
      myRef3.current.style.display = "block";
    } else {
      myRef1.current.style.display = "flex";
      myRef2.current.style.display = "block";
      myRef3.current.style.display = "none";
    }
  }, [cart]);

  const handleImageClick = (event) => {
    event.preventDefault();
    // Add any additional logic for the click event if needed
  };

  return (
      <div className="hero-sec content-div">
        <div ref={shadowRef} className="shadow"></div>
        <div className="cart-box">
        <span className="cart-para cart-heading">
          Cart
          <hr className="cart-hr" />
        </span>
          <p ref={myRef3} className="cart-para empty-para">
            Your cart is empty.
          </p>
          <div ref={myRef1} className="cart-item-div">
            <div className="cart-item-col1">
              <img
                  src={cartImg}
                  className="cart-item-img"
                  alt="Cart Item"
                  onClick={handleImageClick} // Prevent image preview on click
              />
            </div>
            <div className="cart-item-col3">
              <svg
                  className="cart-del"
                  onClick={() => {
                    setCart(cart - 1);
                  }}
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </div>
          </div>
          <div ref={myRef2} className="checkout-div">
            <button className="checkout-btn">checkout</button>
          </div>
        </div>
        <div className="hero-row">
          <div className="hero-col hero-col1">
            <Sneakers />
          </div>
          <div className="hero-col hero-col2">
            <div className="col2-wrapper">
              <h4 className="hero-subHeading">SADEESHA JAYAWEERA</h4>
              <h1 className="main-heading">HOUSE FOR RENT IN KANDY</h1>
              <p className="hero-price">Rs: 50000</p> {/* Added price here */}
              <div className="contact-info">
                <p className="hero-para-telephone">
                  <FaPhoneAlt className="icon"/> 0774289876 <br/>
                </p>
                <p className="hero-para-city">
                  <FaMapMarkerAlt className="icon"/> Kandy
                </p>
              </div>
              <p className="hero-para">
                A brand-new house for rent in Heerassagala, Kandy for residential use.
                A beautiful two bedrooms house with attached toilets, living room, dining room,
                kitchen with pantry, garage with roller doors (3 parking slots) and beautiful
                lawn garden with panoramic view of the mountains. Gated community with very peaceful
                and decent neighbourhood.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Herosec;
