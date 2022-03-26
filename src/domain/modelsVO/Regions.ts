import {
  DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize, CreationOptional
} from 'sequelize'

export class Regions extends Model<InferAttributes<Regions>, InferCreationAttributes<Regions>> {
  declare regionId: CreationOptional<number>
  public name!: string
  public boundingBoxId?: number

  // NOTE: Auto-generated


  public static initialize(sequelize: Sequelize) {
    this.init({
      regionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      boundingBoxId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "BoundingBoxes",
          key: "boundingBoxId"
        }
      },
    }, {
      sequelize: sequelize,
      modelName: 'Regions',
      freezeTableName: false,
      timestamps: true,
      createdAt: true,
      updatedAt: 'updateTimestamp'
    })
  }
}
