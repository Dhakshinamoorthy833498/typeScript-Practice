import { coach } from "./coach";

export class fbcoach implements coach{
    getDailyWorkout(): string {
    return ("Run for 3 kms");
    }
    
}