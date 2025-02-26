import {RecipeRepositoryImple} from "../../../data/repositories/RecipeRepository";
import {RecipeWithUserId, UserIdInterface} from "../../entities/Recipe";

const {createRecipe} = new RecipeRepositoryImple()

export const createRecipeUseCase = async (recipe: RecipeWithUserId, user_id: UserIdInterface)=> {
    return await createRecipe(recipe, user_id);
}