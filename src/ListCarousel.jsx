import React from "react";
import { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ListCarousel.sass";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://ik.imagekit.io/r8tquaqku5/compu4_wvG5DkEhJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503475" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu5_hr8G4ejGi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503460" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu1_j7W-TQ9bm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503417" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu3_GqXxduUEI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503481" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu6_Z13ZLgJUk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503606" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu2_DqEA5ZU0f.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650928503468" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu8_mzQqLNH0z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650929893652" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu10_DW_6Cn-L4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650929893673" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu7_tws2dVzgD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650929893855" onDragStart={handleDragStart} />,
  <img src="https://ik.imagekit.io/r8tquaqku5/compu9_xUBariSln.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650929893681" onDragStart={handleDragStart} />
];

export default class ListCarousel extends Component {
    render() {
        return (
            <div className="list-carousel">
                <div className="list-name">Los productos más populares en PC</div>
                <AliceCarousel autoWidth mouseTracking items={items} autoPlay={false} disableDotsControls={true} />
            </div>
        );
    }
}