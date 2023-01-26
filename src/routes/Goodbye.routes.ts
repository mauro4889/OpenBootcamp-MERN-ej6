import { LogInfo } from '../utils/logger'
import express, {Request, Response} from 'express'
import { GreetingController } from '../controller/GreetingController'

let routes = express.Router()

routes.route('/')
    .get(async (req: Request, res: Response) => {
        let name = req?.query?.name
        let date = new Date()

        LogInfo(`Query Param: ${name}`)

        const controller: GreetingController = new GreetingController()

        const response = await controller.getGreeting(name, date )

        return res.send(response)
    })

    export default routes