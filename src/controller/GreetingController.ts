import { LogSuccess } from "../utils/logger";
import { IGoodbyeController } from "./interfaces";
import { GreetingResponse } from "./types";


export class GreetingController implements IGoodbyeController{

    async getGreeting(name: any, date: Date): Promise<GreetingResponse> {
        
        LogSuccess('[/api/goodbye] Get Request')

        return{
            message: `Goodbye, ${name || 'Wolrd!'}`,
            data: date
        }
    }
}