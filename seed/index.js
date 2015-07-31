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
      });
    }
    return models.Product
      .bulkCreate(productData, {returning: true})
      .then(function (products){

      var inventoryData = [];

      for(var i = 0; i < products.length; i++){
        inventoryData.push({
          quantity: faker.random.number ({min: 10}),
          product_id: faker.random.number ({min:1, max: products.length})
        });
      }
    return models.Inventory.bulkCreate(inventoryData)
      .then(function (orders){

      var createOrders = [];

      for(var i = 0; i < orders.length; i++){

        createOrders.push({
          name: faker.name.firstName(),
          product_id: faker.random.number({min:1, max: orders.length}),
          quantity: faker.random.number({min: 10})
        });
      }
      return models.Order
        .bulkCreate(createOrders);
      });
    });
  });