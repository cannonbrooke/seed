var models = require('../models');
var faker = require('faker');
var Product = models.Product;

models.sequelize
  .sync({force: true}) //replaces data
  .then(function(){

    var productData = []; //empty array to push faker stuff into
    var totalEntries = faker.random.number({min:15, max: 20});
    for (var i = 0; i < totalEntries; i++){
      productData.push(
      {
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: parseFloat(faker.commerce.price())
      }
        );
    }
    return models.Product
                .bulkCreate(productData, {returning: true});
  });