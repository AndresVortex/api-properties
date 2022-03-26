'use strict'
import {
  CreationOptional,
  DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize
} from 'sequelize'

export class Pricings extends Model<InferAttributes<Pricings>, InferCreationAttributes<Pricings>> {
  public rentalPrice!: number
  public administrativeFee!: number

  // NOTE: Auto-generated

  public pricingId!:CreationOptional<number>

  public static initialize(sequelize: Sequelize) {
    this.init({
      pricingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      rentalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      administrativeFee: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize: sequelize,
      modelName: 'Pricings',
      freezeTableName: false,
      timestamps: false
    })
  }
}
