import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://i.pinimg.com/originals/10/59/5d/10595dab6cb5e0fe313a293bbc0808c2.png"
        alt=""
      />

      {/*Products*/}
      <div className="home__row">
        <Product
          id="123421"
          title="Clothing"
          price={4.0}
          rating={4}
          image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1726546.jpg"
        />
        <Product
          id="123421"
          title="Food"
          price={3.65}
          rating={5}
          image="https://ychef.files.bbci.co.uk/976x549/p05xm061.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123421"
          title="Plants"
          price={2.94}
          rating={4}
          image="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg"
        />{" "}
        <Product
          id="123421"
          title="Decorative Items"
          price={6.89}
          rating={5}
          image="https://cdn0.wideopencountry.com/wp-content/uploads/2021/05/fireplace-decor-FI.jpg"
        />{" "}
        <Product
          id="123421"
          title="Kitchen accessories"
          price={3.5}
          rating={3}
          image="https://stylesatlife.com/wp-content/uploads/2020/01/Best-Kitchen-Accessories-Ideas.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123421"
          title="Craft items"
          price={11.94}
          rating={3}
          image="https://img.freepik.com/free-photo/assortment-sewing-stuff_23-2147930220.jpg?size=626&ext=jpg"
        />
      </div>
    </div>
  );
}

export default home;
