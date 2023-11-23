const mongoose = require("mongoose");
const entityName = "Restaurant";
const {
  schemas: { restaurant: restaurantSchema },
} = require("../../database/mongo");

const Restaurant = mongoose.model(entityName, restaurantSchema);
module.exports = {
  add: async (restaurant) => {
    console.log("restaurant", restaurant);
    const restaurants = new Restaurant(restaurant);
    return restaurants.save();
  },
  update: async (id, restaurant) => {
    console.log("restaurant repository", restaurant);
    // const { id , updates }=restaurant
    return Restaurant.findByIdAndUpdate(
      id,
      {
        ...restaurant,
        updatedAt: new Date(),
      },
      {
        new: true,
      }
    );
  },
  delete: async (id) => {
    console.log("delete repository ", id);
    return Restaurant.findByIdAndUpdate(
      id,
      {
        deleted_at: new Date(),
      },
      {
        new: true,
      }
    );
  },
  getById: async (id) => {
    console.log("id hhhhhh", id);
    const restaurant = await Restaurant.findOne({
      _id: id,
    });
    if (!restaurant) {
      throw new Error(`Restaurant with ID ${id} does not exists`);
    }

    return restaurant;
  },
  getAll: async () => {
    const restaurant = await Restaurant.find();
    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }
    return restaurant;
  },
  search: async (search) => {
    const restaurant = await Restaurant.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
      ],
    });
    if (!restaurant) {
      throw new Error(`restaurant does not exist or has been deleted.`);
    }
    return restaurant;
  },
};
