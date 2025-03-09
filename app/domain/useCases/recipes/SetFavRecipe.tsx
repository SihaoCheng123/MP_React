import {RecipeRepositoryImpl} from "../../../data/repositories/RecipeRepository";

const {setFavRecipe} = new RecipeRepositoryImpl()

const setFavRecipeUseCase = async (recipe_id:number, user_id: number)=> {
    await setFavRecipe(recipe_id, user_id);
}