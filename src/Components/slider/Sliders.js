import React from 'react'
import './slider.css';
function Sliders() {
    return (
        <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide SLider" data-bs-ride="carousel">
  <div className="carousel-indicators bar">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active Boxx bga" data-bs-interval="10000">
      <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg" className="d-block w-100" id='image' alt="..."/>
      </div>
    <div className="carousel-item Boxx bgb" data-bs-interval="5000">
      <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631796370/Croma%20Assets/Communication/Mobiles/Images/243510_7_mwm4qp.png/mxw_2048,f_auto" className='mine' alt="" />
      <div className="carousel-caption d-none d-md-block descri13">
        <h5>iPhone 13 pro</h5>
        <p>Best Offer!!</p>
      </div>
    </div>
    <div className="carousel-item Boxx bgd" data-bs-interval="5000">
      <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645512514/Croma%20Assets/Communication/Mobiles/Images/248899_10_q19i23.png/mxw_2048,f_auto" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block descri22">
        <h5>S⋀MSUN<span>G GALAXY S22+</span></h5>
        <p>Best price</p>
      </div>
    </div>
    <div className="carousel-item Boxx bgc" data-bs-interval="10000">
      <img src="https://dealroup.com/wp-content/uploads/2020/05/Grocery-Offers.jpg" className="d-block w-100" id='image1' alt="..."/>
      <div className="carousel-caption d-none d-md-block descri">
        <h5>Grocery</h5>
        <p>FREASH & CHEAPEST PRICE</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev back" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next forward" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Sliders