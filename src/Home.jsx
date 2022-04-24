import React from "react";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Home extends Component {
  render() {
    return(
      <div className="home-page-carousel">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img loading="lazy" src="https://ik.imagekit.io/r8tquaqku5/61cNUoJ82AL._SX3000__RljfDNYZf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650772159679" alt=""/>
          </div>
          <div>
            <img loading="lazy" src="https://ik.imagekit.io/r8tquaqku5/615NvXLrohL._SX3000__f9qr5GLLt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650772254718" alt=""/>
          </div>
          <div>
            <img loading="lazy" src="https://ik.imagekit.io/r8tquaqku5/610UHMnjeYL._SX3000__BiFc_LaV0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650772305164" alt=""/>
          </div>
          <div>
            <img loading="lazy" src="https://ik.imagekit.io/r8tquaqku5/61IUQBqfQ1L._SX3000__8z2DMMDvk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650772358549" alt=""/>
          </div>
        </Carousel>
      </div>
    ); 
  }
}
