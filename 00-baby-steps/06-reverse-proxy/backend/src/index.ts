import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

const cars = [
  { id: 1, name: "Toyota Camry", model: "2020", price: 25000 },
  { id: 2, name: "Honda Civic", model: "2019", price: 22000 },
  { id: 3, name: "Ford Mustang", model: "2021", price: 35000 },
  { id: 4, name: "Chevrolet Corvette", model: "2022", price: 60000 },
  { id: 5, name: "BMW 3 Series", model: "2020", price: 40000 },
  { id: 6, name: "Mercedes-Benz C-Class", model: "2019", price: 45000 },
  { id: 7, name: "Audi A4", model: "2021", price: 42000 },
  { id: 8, name: "Nissan Altima", model: "2020", price: 24000 },
  { id: 9, name: "Hyundai Sonata", model: "2019", price: 23000 },
  { id: 10, name: "Kia Optima", model: "2021", price: 23500 },
  { id: 11, name: "Volkswagen Passat", model: "2020", price: 26000 },
  { id: 12, name: "Subaru Legacy", model: "2019", price: 25000 },
  { id: 13, name: "Mazda 6", model: "2021", price: 27000 },
  { id: 14, name: "Tesla Model 3", model: "2022", price: 50000 },
  { id: 15, name: "Jeep Grand Cherokee", model: "2020", price: 35000 },
  { id: 16, name: "GMC Yukon", model: "2019", price: 55000 },
  { id: 17, name: "Dodge Charger", model: "2021", price: 32000 },
  { id: 18, name: "Chrysler 300", model: "2020", price: 31000 },
  { id: 19, name: "Lexus ES", model: "2019", price: 48000 },
  { id: 20, name: "Infiniti Q50", model: "2021", price: 46000 },
  { id: 21, name: "Acura TLX", model: "2020", price: 43000 },
  { id: 22, name: "Cadillac CTS", model: "2019", price: 47000 },
  { id: 23, name: "Lincoln Continental", model: "2021", price: 49000 },
  { id: 24, name: "Genesis G80", model: "2020", price: 44000 },
  { id: 25, name: "Volvo S60", model: "2019", price: 41000 },
];

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Express backend!",
  });
});

app.get("/api/products", (req, res) => {
  res.json(cars);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
