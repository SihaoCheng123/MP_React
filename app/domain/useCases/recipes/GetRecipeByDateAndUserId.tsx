import {RecipeRepositoryImpl} from "../../../data/repositories/RecipeRepository";
import {detailedRecipeInterface} from "../../../presentation/interfaces/recipeInterface";


const {getRecipeByDateAndUserId} = new RecipeRepositoryImpl()

export const getRecipeByDateAndUserIdUseCase = async (date: string, user_id: number): Promise<detailedRecipeInterface[]> => {
    return await getRecipeByDateAndUserId(date, user_id);
}