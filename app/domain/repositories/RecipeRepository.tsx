import {RecipeWithUserId, UserIdInterface} from "../entities/Recipe";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {UserInterface} from "../entities/User";

export interface RecipeRepository {
    createRecipe(recipe: RecipeWithUserId, user_id: UserIdInterface): Promise<ApiDeliveryResponse>;

}