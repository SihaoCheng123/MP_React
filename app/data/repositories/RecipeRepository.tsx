import {RecipeRepository} from "../../domain/repositories/RecipeRepository";
import {RecipeWithUserId} from "../../domain/entities/Recipe";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {ApiDeliveryResponse} from "../sources/remote/models/ResponseApiDelivery";
import {AxiosError} from "axios";

export class RecipeRepositoryImpl implements RecipeRepository {
    async createRecipe(recipe:RecipeWithUserId, user_id: number|undefined) : Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.post(`recipes/create/${user_id}`, recipe)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }


}