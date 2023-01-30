import { LogInfo } from '../utils/logger'
import express, {Request, Response} from 'express'
import { UserController } from '../controller/UsersController'

let userRouter = express.Router()

userRouter.route('/')
    .get(async (req: Request, res: Response) => {

        let id: string | any = req?.query?.id

        LogInfo(`Query Param: ${id}`)

        const controller: UserController = new UserController()

        const response = await controller.getUsers(id)

        return res.send(response)
    })
    .delete(async (req: Request, res: Response) => {

        let id: string | any = req?.query?.id

        LogInfo(`Query Param: ${id}`)

        const controller: UserController = new UserController()

        const response = await controller.deleteUser(id)

        return res.send(response)
    })
    .post(async (req: Request, res: Response) => {

        let name: any = req?.body?.name
        let age: any = req?.body?.age
        let email: any = req?.body?.email

        const controller: UserController = new UserController()

        let user = {
            name: name || 'default',
            email: email || 'default email',
            age: age || 18
        }

        const response: any = await controller.createUser(user)

        return res.send(response)
    })
    .put(async (req: Request, res: Response) => {

        let id: any = req.body.id
        let name: any = req?.body?.name
        let age: any = req?.body?.age
        let email: any = req?.body?.email

        const controller: UserController = new UserController()

        let user = {
            name: name || 'default',
            email: email || 'default email',
            age: age || 18
        }

        const response: any = await controller.updateUser(id, user)

        return res.send(response)
    })

export default userRouter