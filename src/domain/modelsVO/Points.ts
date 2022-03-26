import {
  DataTypes, InferCreationAttributes, Model, Sequelize, InferAttributes, CreationOptional
} from 'sequelize'

export class Points extends Model<InferAttributes<Points>, InferCreationAttributes<Points>> {
  public longitude!: number
  public latitude!: number

  // NOTE: Auto-generated

  public pointId!: CreationOptional<number>

  public static initialize(sequelize: Sequelize) {
    this.init({
      pointId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          max: 180,
          min: -180
        }
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          max: 180,
          min: -180
        }
      },
    }, {
      sequelize: sequelize,
      modelName: 'Points',
      freezeTableName: false,
      timestamps: true,
      createdAt: true,
      updatedAt: 'updateTimestamp'
    })
  }
}
