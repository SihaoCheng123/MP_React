import {IngredientsRepositoyImpl} from "../../../data/repositories/IngredientsRepository";

const {getWeeklyIngredients} = new IngredientsRepositoyImpl()

export const getWeeklyIngredientsUseCase = async (date: string) => {
    return await getWeeklyIngredients(date);
}