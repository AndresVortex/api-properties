import {setupDatabase} from '../infrastructure/db/postgres/DAOS/db'

// NOTE: Models

import { Pricings } from './modelsVO/Pricings'
import { Properties } from './modelsVO/Properties'
import { PropertiesPerRegion } from './modelsVO/PropertiesPerRegion'
import { Regions } from './modelsVO/Regions'
import { BoundingBox } from './modelsVO/BoundingBox'
import { Points } from './modelsVO/Points'

// NOTE: Conexion to database

const sequelize = setupDatabase()

// NOTE:  Initialize each model in the database - This must be done before associations are made

let models = [ Pricings, Properties, PropertiesPerRegion, BoundingBox, Regions, Points ]
models.forEach(model => model.initialize(sequelize))

// NOTE: Association Pricings - Properties

Pricings.hasOne(Properties, { foreignKey: {allowNull: false,name:'pricingId'}})
Properties.belongsTo(Pricings, { foreignKey: {allowNull: false,name:'pricingId'}})

// NOTE: Association Points - Properties

Points.hasOne(Properties, { foreignKey: {allowNull: false,name:'pointId'}})
Properties.belongsTo(Points, { foreignKey: {allowNull: false,name:'pointId'}})

// NOTE: Association BoundingBox - Points

Points.hasOne(BoundingBox, { foreignKey: {allowNull: false,name:'bottomLeftId'}})
BoundingBox.belongsTo(Points, { foreignKey: {allowNull: false,name:'bottomLeftId'}})

Points.hasOne(BoundingBox, { foreignKey: {allowNull: false,name:'upperRightId'}})
BoundingBox.belongsTo(Points, { foreignKey: {allowNull: false,name:'upperRightId'}})

// NOTE: Association Regions - BoundingBox

Regions.belongsTo(BoundingBox, { foreignKey: {allowNull: false,name:'boundingBoxId'}})
BoundingBox.hasOne(Regions, { foreignKey: {allowNull: false,name:'boundingBoxId'}})

// NOTE:  Association  PropertiesPerRegion - Properties

PropertiesPerRegion.belongsTo(Properties, { foreignKey: {allowNull: false,name:'propertyId'}})

// NOTE:  Association PropertiesPerRegion - Regions

PropertiesPerRegion.belongsTo(Regions, { foreignKey: {allowNull: false,name:'regionId'}})

sequelize.authenticate()

export {
    sequelize as Database,
    Pricings,
    Properties,
    PropertiesPerRegion,
    Regions,
    BoundingBox,
    Points
}

