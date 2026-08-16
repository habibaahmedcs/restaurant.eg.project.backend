const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required"],
      unique: true,
      trim: true,
      minlength: [3, "Restaurant name must be at least 3 characters long"],
      maxlength: [100, "Restaurant name cannot exceed 100 characters"],
    },

    location: {
      type: String,
      required: [true, "Restaurant location/address is required"],
      trim: true,
    },

    cuisine: {
      type: String,
      required: [true, "Cuisine type is required"],
      trim: true,
      enum: {
        values: [
          "italian",
          "mexican",
          "egyptian",
          "lebanese",
          "syrian",
          "chinese",
          "indian",
          "american",
          "japanese",
          "fast_food",
          "other",
        ],
        message: "Please provide a valid cuisine type",
      },
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    averagePrice: {
      type: Number,
      required: [true, "Average price per person is required"],
      min: [0, "Price cannot be negative"],
    },

    openingHours: {
      type: String,
      required: [true, "Opening hours are required (e.g., '09:00 AM - 11:00 PM')"],
      trim: true,
    },

    priceLevel: {
      type: String,
      required: [true, "Price level is required"],
      enum: {
        values: ["budget", "moderate", "expensive"],
        message: "Price level must be budget, moderate, or expensive",
      },
    },

    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be greater than 5"],
    },

    reviewsCount: {
      type: Number,
      default: 0,
      min: [0, "Reviews count cannot be negative"],
    },

    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;