
import {ingredientsShoppingInterface} from "../../presentation/interfaces/recipeInterface";

export interface IngredientsRepository{
    getWeeklyIngredients(date: string, user_id: number): Promise<ingredientsShoppingInterface[]>;
}