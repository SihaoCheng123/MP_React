
import {ingredientsShoppingInterface} from "../../presentation/interfaces/recipeInterface";

export interface IngredientsRepository{
    getWeeklyIngredients(date: string): Promise<ingredientsShoppingInterface[]>;
}