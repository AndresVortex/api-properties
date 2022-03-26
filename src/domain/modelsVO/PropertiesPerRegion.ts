import {
  CreationOptional,
  DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize
} from 'sequelize'


export class PropertiesPerRegion extends Model<InferAttributes<PropertiesPerRegion>, InferCreationAttributes<PropertiesPerRegion>> {
  public propertyId?: number
  public regionId?: number

  // NOTE: Auto-generated

  public propertiePerRegionId?: CreationOptional<number>

  public static initialize(sequelize: Sequelize) {
    this.init({
      propertiePerRegionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Properties",
          key: "propertyId"
        }
      },
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Regions",
          key: "regionId"
        }
      },
    }, {
      sequelize: sequelize,
      modelName: 'PropertiesPerRegion',
      freezeTableName: false,
      timestamps: true,
      createdAt: true,
      updatedAt: 'updateTimestamp'
    })
  }
}
