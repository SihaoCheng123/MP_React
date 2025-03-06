import {RecipeRepository} from "../../domain/repositories/RecipeRepository";
import {RecipeWithUserId} from "../../domain/entities/Recipe";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {ApiDeliveryResponse} from "../sources/remote/models/ResponseApiDelivery";
import {AxiosError} from "axios";
import {detailedRecipeInterface} from "../../presentation/interfaces/recipeInterface";

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
    async getDetailedRecipe(recipe_id: number): Promise<detailedRecipeInterface> {
        try {
            const response = await ApiDelivery.get(`recipes/get/${recipe_id}`);
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            throw e
        }
    }

    async getRecipeByDateAndUserId(date: string, user_id: number): Promise<detailedRecipeInterface[]> {
        try {

            if (!date || user_id === undefined) {
                console.error("Fecha o user_id inválido:", date, user_id);
                return [];
            }


            console.log(date)
            console.log(user_id)
            const response = await ApiDelivery.get(`recipes/get-by-date-and-user/${date}/${user_id}`);
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            return []
        }
    }


}