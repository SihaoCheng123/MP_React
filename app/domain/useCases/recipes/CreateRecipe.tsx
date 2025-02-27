import {RecipeRepositoryImpl} from "../../../data/repositories/RecipeRepository";
import {RecipeWithUserId} from "../../entities/Recipe";

const {createRecipe} = new RecipeRepositoryImpl()

export const createRecipeUseCase = async (recipe: RecipeWithUserId, user_id: number | undefined)=> {
    return await createRecipe(recipe, user_id);
}