import React from 'react';
import Image, { StaticImageData } from "next/image"; 
import ProductImage from "@/app/images/Product.avif"; // Import your image correctly

interface Product {
  name: string;
  price: number;
  originalPrice: number; 
  image: StaticImageData; // Change 'any' to 'StaticImageData'
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="p-4 flex flex-col items-center">
    <div className="aspect-square w-full relative mb-4">
      <Image 
        src={product.image} 
        alt={product.name}
        width={300} 
        height={300} 
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
    <h3 className="text-gray-800 font-medium text-lg mb-2 text-center">{product.name}</h3>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-gray-900">Rs. {product.price.toFixed(2)}</span>
      <span className="text-gray-500 line-through">Rs. {product.originalPrice.toFixed(2)}</span>
    </div>
    <button className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-teal-700 transition-colors">
      SELECT ITEM
    </button>
  </div>
);

const ProductCatalog = () => {
  const products: Product[] = [
    {
      name: "The Perfect Agarbathi Set: 5 Fragrances",
      price: 467.78,
      originalPrice: 519.75,
      image: ProductImage // Use the correct import
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
    {
      name: "Ultimate Dhoop Cones",
      price: 373.28,
      originalPrice: 414.74,
      image: ProductImage
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <button className="bg-teal-600 text-white px-8 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-teal-700 transition-colors font-medium mt-4">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
