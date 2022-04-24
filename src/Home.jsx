import React from "react";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.sass";
import AdOne from "./AdOneComponent.jsx";
import Auth from "./MainAuthButton.jsx";

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
        
        <div className="ads" style={{ marginTop:"-350px", display : "flex", flexWrap: "wrap", position: "absolute", marginLeft:"50px" }}>
          <Auth />
          <AdOne title="Electronicos" img="https://ik.imagekit.io/r8tquaqku5/electronicos_m779cjihJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650815658025" url="https://www.amazon.com/-/es/b?node=16225009011&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&pf_rd_p=6d089b3e-abd9-4109-8b47-f901e8767422&pd_rd_r=cfda2f51-0577-479c-890f-dc25eb9ff51c&pd_rd_w=NqgQY&pd_rd_wg=vpaHG&ref_=pd_gw_unk"/>
          <AdOne title="Compra para Día de la Madre" img="https://ik.imagekit.io/r8tquaqku5/madre_FFc5cHsFF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650824912696" url="https://www.amazon.com/-/es/b?node=23175097011&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&pf_rd_p=215ce74b-d18f-4208-9875-892f25ed82db&pd_rd_r=cfda2f51-0577-479c-890f-dc25eb9ff51c&pd_rd_w=6ApNP&pd_rd_wg=vpaHG&ref_=pd_gw_unk"/>
          <AdOne title="Oferta del día" img="https://ik.imagekit.io/r8tquaqku5/computadoras_V4BL7U1X5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650826345720" url="https://www.amazon.com/-/es/gp/goldbox/?ie=UTF8&ref_=nav_cs_gb&pf_rd_p=140e3a6d-4915-437f-9cde-b104e5dbed6e&pd_rd_wg=vpaHG&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&pd_rd_w=2xsoR&pd_rd_r=cfda2f51-0577-479c-890f-dc25eb9ff51c"/>
          <AdOne title="Crear con guirnaldas de luces" img="https://ik.imagekit.io/r8tquaqku5/luces_YepaSU-KC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650826196229" url="https://www.amazon.com/s?k=strip+lighting&language=es&pd_rd_r=29ae1b31-fc51-444f-aa57-3921b7f740c0&pd_rd_w=WtCHK&pd_rd_wg=eW40b&pf_rd_p=7738c60e-a1c7-4678-9812-5d82959d511c&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&ref=pd_gw_unk"/>
          <AdOne title="Para realizar ejercicio" img="https://ik.imagekit.io/r8tquaqku5/Fuji_Dash_Fitness_1X._SY304_CB639748186__NgYqTUGVY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650825956231" url="https://www.amazon.com/s?k=work+from+home+fitness&language=es&pd_rd_r=864b6c54-de00-4a9b-80f1-905e1384bac6&pd_rd_w=uzzg8&pd_rd_wg=6gNA3&pf_rd_p=2c73d1ae-9178-422f-ae3b-1b5628bd95bb&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&ref=pd_gw_unk"/>
          <AdOne title="Novedades en Juguetes" img="https://ik.imagekit.io/r8tquaqku5/juguetes_EKueOPprW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650825956220" url="https://www.amazon.com/s?k=toys&language=es&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&pd_rd_r=29ae1b31-fc51-444f-aa57-3921b7f740c0&pd_rd_w=Xrg4G&pd_rd_wg=eW40b&pf_rd_p=fffb6f02-0490-4c1e-a204-518c7cef06f6&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&ref=pd_gw_unk"/>
          <AdOne title="Hogar y Cocina" img="https://ik.imagekit.io/r8tquaqku5/Fuji_Dash_en_US._SY304_CB641328052__9iKORYADG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650825956202" url="https://www.amazon.com/s?k=hogar+y+cocina&language=es&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1I6JCWDEKEH2U&pd_rd_r=29ae1b31-fc51-444f-aa57-3921b7f740c0&pd_rd_w=E2jgD&pd_rd_wg=eW40b&pf_rd_p=ceff0e8f-dc06-4379-91b0-f0be88ab3d84&pf_rd_r=BNV2ZF1WJ9PYRW3J4GA4&sprefix=hogar%2Caps%2C278&ref=pd_gw_unk"/>
        </div>

      </div>
    ); 
  }
}
