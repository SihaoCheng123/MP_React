import {RecipeWithUserId} from "../entities/Recipe";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {detailedRecipeInterface} from "../../presentation/interfaces/recipeInterface";

export interface RecipeRepository {
    createRecipe(recipe: RecipeWithUserId, user_id: number|undefined): Promise<ApiDeliveryResponse>;
    getDetailedRecipe(recipe_id: number|undefined): Promise<detailedRecipeInterface>;
}