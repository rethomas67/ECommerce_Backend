const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // the primary key needed to be defined in this instance, because of the many-many references
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //foreign key to table product
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "product",
        key: "id",
        unique: false,
      },
    },
    //foreign key to table tag
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "tag",
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
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
