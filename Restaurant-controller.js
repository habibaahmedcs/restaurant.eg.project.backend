const Restaurant = require("../models/Restaurant");

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      status: "success",
      count: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Error fetching restaurants: ${error.message}`,
    });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const cuisine = req.body.cuisine?.toLowerCase();
    const priceLevel = req.body.priceLevel?.toLowerCase();

    // إضافة مسار الصورة لو تم رفعها في الـ Request
    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.path; 
    }

    const newRestaurant = await Restaurant.create({
      ...req.body,
      cuisine,
      priceLevel,
      imageUrl, // حفظ الصورة في قاعدة البيانات
    });

    res.status(201).json({
      status: "success",
      message: "Restaurant added",
      data: {
        restaurant: newRestaurant,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Error creating restaurant: ${error.message}`,
    });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "error", message: "Restaurant not found" });
    }

    res.status(200).json({
      status: "success",
      data: {
        restaurant,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Error fetching restaurant: ${error.message}`,
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    if (req.body.cuisine) req.body.cuisine = req.body.cuisine.toLowerCase();
    if (req.body.priceLevel) req.body.priceLevel = req.body.priceLevel.toLowerCase();

    // تحديث مسار الصورة لو المستخدم رفع صورة جديدة
    if (req.file) {
      req.body.imageUrl = req.file.path;
    }

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedRestaurant) {
      return res
        .status(404)
        .json({ status: "error", message: "Restaurant not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Restaurant updated",
      data: {
        restaurant: updatedRestaurant,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Error updating restaurant: ${error.message}`,
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) {
      return res
        .status(404)
        .json({ status: "error", message: "Restaurant not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Restaurant deleted",
      data: {
        restaurant: deletedRestaurant,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: `Error deleting restaurant: ${error.message}`,
    });
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};