import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
      const result = await response.json();
      setData(result.product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  return (
    <div className="container bootdey ">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body row mt-5">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img src={data.image} alt={data.title} />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#" className>
                  {data.title}
                </a>
              </h4>
              <p>{data.description}</p>
              <div className="product_meta">
                <span className="posted_in">
                  <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.
                </span>
                <span className="tagged_as">
                  <strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.
                </span>
              </div>
              <div className="m-bot15">
                <strong>Price : </strong> <span className="amount-old">$544</span> <span className="pro-price"> $300.00</span>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="quantiy" placeholder={1} className="form-control quantity" />
              </div>
              <p>
                <button className="btn btn-round btn-danger" type="button">
                  <i className="fa fa-shopping-cart" /> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
