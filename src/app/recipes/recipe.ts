import { Ingredient } from "app/shared/ingredient";

export class Recipe {
    constructor(public name, public description,public imagePath, public ingredients : Ingredient[] ){
        
    }
}
