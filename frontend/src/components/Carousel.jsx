import React from "react";

function Carousel() {
  return (
    <div>
      <section id="testimonial" className="py-5">
        <div className="text-center">
          <h2>Testimonial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="row">
              <div className="col-3 align-self-center">
                <img src="./assets/images/img_photo1.png" alt="" />
              </div>
              <div className="col-9 review">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <p className="author">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
