const mongoose = require("mongoose");
const entityName = "User";

const {
  schemas: { user: userSchema },
} = require("../../database/mongo");

const repository = () => {
  //schema
  const User = mongoose.model(entityName, userSchema);
  return {
    add: async (user) => {
      const mongoObject = new User(user);
      return mongoObject.save();
    },
    update: async (user) => {
      const { id, updates } = user;
      delete user.id;
      return User.findByIdAndUpdate(
        id,
        {
          ...updates,
          updatedAt: new Date(),
        },
        {
          new: true,
        }
      );
    },
    delete: async (user) => {
      const { id } = user;
      console.log("repository :", id);
      delete user.id;
      return User.findByIdAndUpdate(
        id,
        {
          deletedAt: new Date(),
        },
        {
          new: true,
        }
      );
    },
    getById: async (id) => {
      const user = await User.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      if (!user) {
        throw new Error(
          `User with ID ${id} does not exist or has been deleted.`
        );
      }
      return user;
    },
  };
};

module.exports = repository();
