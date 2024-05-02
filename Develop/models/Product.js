// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //mysql setup the id primary key with autoincrement
    // product_name string w/o nulls
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price decimal numeric with precision of 2 not null sequelize validates if the input is a decimal
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { isDecimal: true },
    },
    //stock integer not null sequelize validates if the input is a number. If no input entered sequelize defaults to 10
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true },
    },
    //the foreign key
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //the reference to the category primary key
      references: {
        model: "category",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
