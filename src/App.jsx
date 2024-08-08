import Navbar from "./components/Navbar";
import Croutes from "./Croutes";
import { RatingProvider } from "./store/ProductRatingStore";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RatingProvider a>
        <Navbar></Navbar>
        <Croutes></Croutes>
      </RatingProvider>
    </>
  );
}

export default App;
