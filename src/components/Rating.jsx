import { useContext } from "react";
import { RatingContext } from "../store/ProductRatingStore";

function Rating({ productId }) {
  const productContext = useContext(RatingContext);
  productId = productId - 1;
  const stars = [];
  for (let i = 0; i <= productContext[productId]; i++) {
    stars.push(<span key={i} className="fa fa-star" />);
  }

  return (
    <div>
      <h1>{productContext[productId]}</h1>
      <div>{stars}</div>
      <h1>Stars</h1>
    </div>
  );
}

export default Rating;
0;
