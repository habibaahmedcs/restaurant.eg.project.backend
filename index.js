const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const restaurantRouter = require("./routes/Restaurant-routes");
const dbConnect = require("./config/db-connect");

const app = express();

dbConnect();
app.use(express.json());

app.use("/uploads", express.static("uploads"));


app.use("/api/v1/restaurants", restaurantRouter);


app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});