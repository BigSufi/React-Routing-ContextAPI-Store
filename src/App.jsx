import Navbar from "./components/Navbar";
import Croutes from "./Croutes";
import { RatingProvider } from "./store/ProductRatingStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./api/data";

function App() {
  const product = products.products.map((item) => item.rating);
  console.log(product);
  return (
    <>
      <RatingProvider>
        <Navbar></Navbar>
        <Croutes></Croutes>
      </RatingProvider>
    </>
  );
}

export default App;
