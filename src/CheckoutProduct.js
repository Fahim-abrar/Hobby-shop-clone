import React from "react";
import "./CheckoutProduct.css"
import { useStateValue} from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket=()=>{
             dispatch({ 
                type: "RemoveFromBasket",
                id: id,
            });
 };

    return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>

          <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
              {Array(rating)
              .fill()
              .map((_,i) => (
                  <p>&#11088;</p>
              ))
              }
          </div>
             <button onClick={RemoveFromBasket}>RemoveFromBasket</button>


      </div>
    </div>
  );
}

export default CheckoutProduct;
