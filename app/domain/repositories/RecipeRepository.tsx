import {RecipeWithUserId} from "../entities/Recipe";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {detailedRecipeInterface} from "../../presentation/interfaces/recipeInterface";

export interface RecipeRepository {
    createRecipe(recipe: RecipeWithUserId, user_id: number|undefined): Promise<ApiDeliveryResponse>;
    getDetailedRecipe(recipe_id: number|undefined): Promise<detailedRecipeInterface>;
    getRecipeByDateAndUserId(date: string, user_id: number|undefined): Promise<detailedRecipeInterface[]>;
    getAllRecipesByUser(user_id: number) : Promise<detailedRecipeInterface[]>;
    setFavRecipe(recipe_id: number, user_id: number): Promise<detailedRecipeInterface>
}

