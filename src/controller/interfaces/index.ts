import { BasicResponse, GreetingResponse } from "../types";

export interface IHelloController {
    getMessage(name: string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getGreeting(name: string, date: Date): Promise<GreetingResponse>
}

export interface IUserController {
    // Read all users from database || get User By ID
    getUsers(id?: string): Promise<any>
    //Delete user by ID
    deleteUser(id?: string): Promise<any>
    //Create new User
    createUser(user: any): Promise<any>
    //Update User
    updateUser(id:string, user:any): Promise<any>
}