import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';
const Galary = () => {
  var splide = new Splide(".splide");
  splide.mount();
  return (
    <>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="https://splidejs.com/images/slides/general/01.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://splidejs.com/images/slides/general/02.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Galary;
