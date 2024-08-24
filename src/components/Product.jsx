import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    await fetch('https://fakestoreapi.in/api/products')
      .then((response) => response.json())
      .then((result) => setData(result.products))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((x) => (
            <div
              className="card bg-white shadow-md rounded-lg overflow-hidden"
              key={x.id}
            >
              <Link to={`/${x.id}`}>
                <img
                  src={x.image}
                  className="w-full h-48 object-contain p-4"
                  alt={x.title}
                />
              </Link>
              <div className="card-body p-4">
                <h5 className="card-title font-bold text-lg">
                  {x.title.slice(0, 20)}
                </h5>
                <p className="card-text text-gray-600 text-sm">
                  {x.description.slice(0, 50)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold">Price: ${x.price}</p>
                  <a
                    href="#"
                    className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
