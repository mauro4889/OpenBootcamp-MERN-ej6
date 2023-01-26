import { LogError } from "@/utils/logger"
import { userEntity } from "../entities/User.entity"


export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity()

        return await userModel.find({isDelete: false})
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`)
    }
}