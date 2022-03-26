import { Dialect, Sequelize } from 'sequelize'
import { ConfigDB }  from '../../../../domain/Config'
let sequelize : Sequelize

export let setupDatabase = function() {
  if (!sequelize) {
    sequelize = new Sequelize(ConfigDB.database, ConfigDB.username, ConfigDB.password, {port: ConfigDB.port, dialect:ConfigDB.dialect as Dialect, logging:ConfigDB.logging, define:ConfigDB.define,dialectOptions:ConfigDB.dialectOptions, timezone:ConfigDB.timezone})
    sequelize.authenticate().then(() => {
      console.log('DB Conection ok')

      // NOTE: Sincronizacion forzada del sequelize

      sequelize.sync().then(() => {
        console.log("Todos los modelos Sincronizados correctamente.");
      }).catch(err => {
        console.error('No fue posible sincronizar los modelos: ', err)
      })
    }).catch(err => {
      console.error('Unable to connect to the database:', err)
    })
  }
  return sequelize
}
