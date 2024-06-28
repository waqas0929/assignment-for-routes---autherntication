import { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import "../Index.css";
import ProductCard from "../component/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data);
        setSearchedProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchString.toLowerCase()),
    );
    setSearchedProducts(searchResults);
  }, [searchString, products]);

  return (
    <div className="my-2 flex flex-col items-center border border-black">
      <h1 className="font-mono text-6xl">Product List</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        className="mb-4 w-full rounded-md border p-2 shadow-sm focus:border-blue-500 focus:outline-none"
      />
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {searchProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Product;
