import {
  CreationOptional,
  DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize
} from 'sequelize'

export class BoundingBox extends Model<InferAttributes<BoundingBox>, InferCreationAttributes<BoundingBox>> {
  public bottomLeftId!: number
  public upperRightId!: number

  // NOTE: Auto-generated

  public boundingBoxId?: CreationOptional<number>

  public static initialize(sequelize: Sequelize) {
    this.init({
      boundingBoxId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bottomLeftId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Points",
          key: "pointId"
        }
      },
      upperRightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Points",
          key: "pointId"
        }
      },
    }, {
      sequelize: sequelize,
      modelName: 'BoundingBoxes',
      freezeTableName: false,
      timestamps: true,
      createdAt: true,
      updatedAt: 'updateTimestamp'
    })
  }
}
