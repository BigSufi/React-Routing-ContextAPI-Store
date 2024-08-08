import { useContext } from "react";
import { RatingContext } from "../store/ProductRatingStore";

function Rating({ productId }) {
  const stars = [];
  const { products } = useContext(RatingContext);
  const rating = products.map((item) => item.rating);
  productId = productId - 1;
  for (let i = 0; i <= rating[productId]; i++) {
    stars.push(<span key={i} className="fa fa-star" />);
  }

  return (
    <div>
      <h1>{rating[productId]}</h1>
      <div>{stars}</div>
      <h1>Stars</h1>
    </div>
  );
}

export default Rating;
