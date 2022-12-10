import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
 {
  id: uuid(),
  title: "Product 1",
  price: "100",
  description: "Product 1 Description",
  image: require('./Images/iphone.webp'),
  discount: "45",
  category: "Mobiles",
  rating: 4.3,
  inStock: true,
  brand: "Apple",
  fastDelivery: false,
 },
 {
  id: uuid(),
  title: "Samsung Tablet",
  price: "200",
  description: "Product 2 Description",
  image: require('./Images/ipad.webp'),
  discount: "45",
  category:"Laptops",
  rating: 4.3,
  brand: "Samsung",
  inStock: true,
  fastDelivery: false,
 },
 {
  id: uuid(),
  title: "Samsung Tablet",
  price: "900",
  description: "Product 2 Description",
  image: require('./Images/dfsa.webp'),
  discount: "45",
  category:"Laptops & Accessories",
  rating: 4.3,
  brand: "Samsung",
  inStock: true,
  fastDelivery: false,
 },
];
