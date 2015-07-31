'use strict';
module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define('Inventory', {
    quantity: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Inventory;
};