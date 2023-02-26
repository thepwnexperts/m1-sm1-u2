import { useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, cart } = useContext(DataContext);

  return (
    <div style={{textAlign: "center"}}>
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <div className="productList">
          {data.map((item) => {
            return (
              cart.includes(item.id) && (
                <div className="productCard" key={item._id}>
                  <img
                    className="productImage"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="productDetails">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <a
                    href=""
                    className="addToCart"
                    style={{ color: cart.includes(item.id) ? "red" : "black" }}
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromCart(item.id);
                    }}
                  >
                    ♡
                  </a>
                </div>
              )
            );
          })}
          <Link className="btn checkoutBtn" to='/checkout' state={{cart}}>Place Order</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
