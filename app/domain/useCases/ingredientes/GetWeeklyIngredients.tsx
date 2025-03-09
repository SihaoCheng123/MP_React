import {IngredientsRepositoyImpl} from "../../../data/repositories/IngredientsRepository";

const {getWeeklyIngredients} = new IngredientsRepositoyImpl()

export const getWeeklyIngredientsUseCase = async (date: string, user_id:number) => {
    return await getWeeklyIngredients(date, user_id);
}