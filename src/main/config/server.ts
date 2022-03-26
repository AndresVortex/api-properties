import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import region  from '../routes/regions-routes';
import { Database } from '../../domain';
import { setupDatabase } from '../../infrastructure/db/postgres/DAOS/db';
import { Express } from 'express';
import middlewares from './middlewares';
class Server {

  private app: Express;
  private port: string;
  
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '4000';
    this.postgres()
    this.middlewaresServer(this.app)
    this.router(this.app)
  }


  async postgres() {
    try {
      
      setupDatabase()
      Database
      
    } catch (error: any) {
      throw new Error(error)
    }
  }
  




  // middlewares() {
  //   // this.app.options('*', cors());
  //   this.app.use(cors())
  //   this.app.use(express.json({ limit: '50mb' }))
  //   this.app.use(express.urlencoded({ limit: '50mb', extended: true }))
  //   this.app.use(morgan('dev'))

  //   this.app.use(function(req, res, next) {
  //     res.header('Access-Control-Allow-Origin', '*')
  //     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  //     // intercepts OPTIONS method
  //     if (req.method === 'OPTIONS') {
  //       console.log('metodoptions')
  //       // respond with 200
  //       res.send(200)
  //     } else {
  //       // move on
  //       next()
  //     }
  //   })
  //   // this.app.use('/', routes)
    

  // }
  middlewaresServer(app: Express) {
    middlewares(app)
    

  }



  router(app: Express) {
    routes(app)
    // this.app.get('/:id', (req: Request, res: Response)=> { return res.json({msg: 'todo bien'})});


  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ', this.port)
    })
  }
}
export default Server;
