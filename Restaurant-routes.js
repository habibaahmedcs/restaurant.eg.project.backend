const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload"); 
const {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controller/Restaurant-controller");


router.route("/")
  .get(getAllRestaurants)
  .post(upload.single("image"), createRestaurant); 

router.route("/:id")
  .get(getRestaurantById)
  .patch(upload.single("image"), updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;