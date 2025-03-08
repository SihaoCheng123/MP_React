import {RecipeRepositoryImpl} from "../../../data/repositories/RecipeRepository";
import {detailedRecipeInterface} from "../../../presentation/interfaces/recipeInterface";

const {getDetailedRecipe} = new RecipeRepositoryImpl()

export const getDetailedRecipeUseCase = async (recipe_id: number): Promise<detailedRecipeInterface> => {
    return await getDetailedRecipe(recipe_id)
}