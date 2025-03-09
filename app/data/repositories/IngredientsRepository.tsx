import {IngredientsRepository} from "../../domain/repositories/IngredientsRepository";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {ingredientsShoppingInterface} from "../../presentation/interfaces/recipeInterface";

export class IngredientsRepositoyImpl implements IngredientsRepository{
    async getWeeklyIngredients(date: string, user_id: number): Promise<ingredientsShoppingInterface[]>{
        try {
            const response = await ApiDelivery.get(`recipes/weekly-ingredients-user/${date}/${user_id}`);
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            return []
        }
    }
}