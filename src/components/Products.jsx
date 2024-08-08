import { Link } from "react-router-dom";
import { products } from "../api/data";
import Rating from "./Rating";

function Products() {
  const result = products.products.map((item) => item.id);
  console.log(result);
  console.log(result);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.products.map((item, index) => (
            <div className="col-12 col-lg-4 mt-5 col-md-3 col-sm-6" key={index}>
              <div className="card">
                <Link to={`/products/${item.id}`}>
                  <img src={item.thumbnail} className="w-100" alt="images" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.price}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>

                  <div>{<Rating productId={item.id} />}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
