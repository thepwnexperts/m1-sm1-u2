import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { server } from "../App";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartIds = location.state.cart;
  const [orderPrice, setOrderPrice] = useState(0);
  useEffect(() => {
    server
      .post("/cal", { id: cartIds })
      .then((res) => {
        setOrderPrice(res.data.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [orderPrice]);

  return (
    <div className="checkoutPage">
      <h1>
        Congratulations🎉
        <br /> Your order of ₹{orderPrice} has been placed.
      </h1>
      <i>You will be redirected to the home page in 5 seconds.</i>
      <Link className="btn" to="/">
        Click here to go back to the home page.
      </Link>
    </div>
  );
};

export default Checkout;
