import { IngredientsRepository } from "../../domain/repositories/IngredientsRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import { IngredientDTO } from "../dtos/IngredientDTO";

export class IngredientsRepositoryImpl implements IngredientsRepository {
    async getWeeklyIngredients(date: string, user_id: number): Promise<IngredientDTO[]> {
        try {
            const response = await ApiDelivery.get(`recipes/weekly-ingredients-user/${date}/${user_id}`);
            return response.data as IngredientDTO[];
        } catch (error) {
            const e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return [];
        }
    }
}