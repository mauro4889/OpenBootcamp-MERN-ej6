import { BasicResponse, GreetingResponse } from "../types";

export interface IHelloController {
    getMessage(name: string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getGreeting(name: string, date: Date): Promise<GreetingResponse>
}

export interface IUserController {
    getUsers(): Promise<any>
}