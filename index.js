let express = require("express");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("The server is running");
});
// Question 1: Filter Products by Category
let products = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Mobile", price: 20000, category: "Electronics" },
  { name: "Shirt", price: 1500, category: "Apparel" },
  { name: "Mixer Grinder", price: 5000, category: "Home Appliances" },
];
function filterByCategory(product, category) {
  return product.category === category;
}
app.get("/products/category/:category", (req, res) => {
  let category = req.params.category;
  let result = products.filter((product) => filterByCategory(product, category),
  );
  res.json(result);
});
// Question 2: Filter Cars by Mileage
let carDetails = [
  { name: "Maruti", model: "Swift", mileage: 15000 },
  { name: "Hyundai", model: "i20", mileage: 25000 },
  { name: "Tata", model: "Nexon", mileage: 30000 },
];
function filterByMileage(carDetail, maxMileage) {
  return carDetail.mileage < maxMileage;
}
app.get("/cars/mileage/:maxMileage", (req, res) => {
  let maxMileage = parseInt(req.params.maxMileage);
  let result = carDetails.filter((carDetail) => filterByMileage(carDetail, maxMileage));
  res.json(result);
});
// Question 3: Filter Movies by Rating.
let movies = [
  {title: "3 idiots", genre: "Comdey", rating: 9},
  {title: "Dangal", genre: "Drama", rating: 10},
  {title: "Bahubali", genre: "Action", rating: 8},
];
function filterByRating(movie, minRating) {
  return movie.rating > minRating;
}
app.get("/movies/rating/:minRating", (req, res) => {
let minRating = parseFloat(req.params.minRating);
  let result = movies.filter((movie) => filterByRating(movie, minRating));
  res.json(result);
});
// Question 4: Filter Orders by Status
let orders = [
  {orderId: 1, customerName: "Rahul", status: "Shipped"},
  {orderId: 2, customerName: "Sita", status: "Pending"},
  {orderId: 3, customerName: "Amit", status: "Shipped"}
]
function filterByStatus(order, status) {
  return order.status === status;
}
app.get("/orders/status/:status", (req, res)=> {
  let status = req.params.status;
  let result = orders.filter((order) => filterByStatus(order, status));
  res.json(result);
});