import { LogInfo } from '../utils/logger'
import express, {Request, Response} from 'express'
import helloRouter from './Hello.routes'
import goodbyeRouter from './Goodbye.routes'
let server = express()

let rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})

server.use('/', rootRouter)
server.use('/hello', helloRouter)
server.use('/goodbye', goodbyeRouter)

export default server