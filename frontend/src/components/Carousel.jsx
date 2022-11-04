import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";

function Carousel() {
  return (
    <div>
      <div id="Carousel" className="py-5">
        <div className="text-center">
          <h2>Testimonial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="row test-card-inside p-1 bg-light">
              <div className="col-3 align-self-center">
                <img src="./assets/img/photo1.png" alt="" />
              </div>
              <div className="col-9 review">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p className="author">John Dee 32, Bromo</p>
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row test-card-inside p-1 bg-light">
              <div className="col-3 align-self-center">
                <img src="./assets/img/photo1.png" alt="" />
              </div>
              <div className="col-9 review">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p className="author">John Dee 32, Bromo</p>
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
                <img src="./assets/img/Bintang.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme"></div>
      </div>
    </div>
  );
}

export default Carousel;
