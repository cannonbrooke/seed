'use strict';
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define('Order', {
    name: DataTypes.TEXT,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Orders.hasMany(models.Product);
      }
    }
  });
  return Orders;
};