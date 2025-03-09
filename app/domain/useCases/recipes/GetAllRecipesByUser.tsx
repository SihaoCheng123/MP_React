import {RecipeRepositoryImpl} from "../../../data/repositories/RecipeRepository";

const {getAllRecipesByUser} = new RecipeRepositoryImpl()

export const getAllRecipesByUserUseCase = async (user_id: number) => {
    return await getAllRecipesByUser(user_id)
}