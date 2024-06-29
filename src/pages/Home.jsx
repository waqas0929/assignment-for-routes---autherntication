import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store!</h1>
        <p className="mt-4 text-lg">
          Discover our exclusive offers and latest products.
        </p>
      </div>

      {/* Banner Section */}
      <div className="mb-8">
        <div className="rounded-lg bg-blue-500 p-6 text-white shadow-lg">
          <h2 className="text-3xl font-bold">Special Offer!</h2>
          <p className="mt-2">
            Get 50% off on all products. Limited time only.
          </p>
          <button className="mt-4 transform rounded bg-white px-4 py-2 font-bold text-blue-500 transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-950">
            Shop Now
          </button>
        </div>
      </div>

      {/* Offers Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-green-500 p-4 text-white shadow-lg">
          <h3 className="text-2xl font-bold">Free Shipping</h3>
          <p className="mt-2">On orders over $50. Don't miss out!</p>
        </div>
        <div className="rounded-lg bg-yellow-500 p-4 text-white shadow-lg">
          <h3 className="text-2xl font-bold">New Arrivals</h3>
          <p className="mt-2">Check out our latest products.</p>
        </div>
        <div className="rounded-lg bg-red-500 p-4 text-white shadow-lg">
          <h3 className="text-2xl font-bold">Clearance Sale</h3>
          <p className="mt-2">Up to 70% off on selected items.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
