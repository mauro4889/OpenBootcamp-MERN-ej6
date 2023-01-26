import { Get, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { GetAllUsers } from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController {
    /**
     * Endpoint to retrive the Users in the Collection "Users" of DB
     */
    getUsers(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}