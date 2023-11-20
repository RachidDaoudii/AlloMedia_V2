const usersRepository = require("./users.repository");

const brandsRepository=require('./brands.repository')
const tagsRepository=require('./tags.repository')
const citiesRepository=require('./cities.repository')
const itemsRepository=require('./products.repository')
const categoriesRepository = require("./categories.repository");
const cuisinesRepository = require("./cuisine.repository");
module.exports = {
  usersRepository,
  brandsRepository,
  tagsRepository,
  citiesRepository,
  itemsRepository,
  categoriesRepository,
  cuisinesRepository,
};
