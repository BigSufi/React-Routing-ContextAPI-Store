import { useParams } from "react-router-dom";
import { products } from "../api/data";

function ProductPage() {
  const { id } = useParams();
  const product = products.products.find((x) => x.id == id);
  return <div>{product.title}</div>;
}

export default ProductPage;
