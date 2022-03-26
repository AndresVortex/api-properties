import { Dialect, Sequelize } from 'sequelize'
import { ConfigDB }  from '../../../../domain/Config'
module.exports = function closeConnection () {
  let sequelize = new Sequelize(ConfigDB.database, ConfigDB.username, ConfigDB.password, {port: ConfigDB.port, dialect:ConfigDB.dialect as Dialect, logging:ConfigDB.logging, define:ConfigDB.define,dialectOptions:ConfigDB.dialectOptions, timezone:ConfigDB.timezone})
  sequelize.close().then(() => {
    return true
  }).catch(err => {
    console.error('No fue posible cerrar la sesion', err)
    return false
  })
}
