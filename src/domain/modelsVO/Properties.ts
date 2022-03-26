import {
  CreationOptional,
  DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize
} from 'sequelize'

export class Properties extends Model<InferAttributes<Properties>, InferCreationAttributes<Properties>> {
  public title!: string
  public description!: string
  // public princingId!: number
  public bedrooms!: number
  public bathrooms!: number
  public area!: number
  public pricingId?: number
  public pointId?: number
  public regions?: string[]
  // public createdAt?: Date;
  // public updatedAt?: Date;

  // NOTE: Auto-generated

  public propertyId?: CreationOptional<number>

  public static initialize(sequelize: Sequelize) {
    this.init({
      propertyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pricingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Pricings",
          key: "pricingId"
        }
      },
      pointId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Points",
          key: "pointId"
        }
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          max:6,
          min:1
        }
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          max:4,
          min:1
        }
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          max:300,
          min:15
        }
      },
      regions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
      }
      
    }, {
      sequelize: sequelize,
      modelName: 'Properties',
      freezeTableName: false,
      timestamps: true,
      createdAt: true,
      updatedAt: 'updateTimestamp'
    })
  }
}
