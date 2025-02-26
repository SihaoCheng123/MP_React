import {RecipeWithUserId} from "../entities/Recipe";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface RecipeRepository {
    createRecipe(recipe: RecipeWithUserId, user_id: number|undefined): Promise<ApiDeliveryResponse>;

}