import {useState} from "react";
import {ingredientsShoppingInterface} from "../../interfaces/recipeInterface";
import {getWeeklyIngredientsUseCase} from "../../../domain/useCases/ingredientes/GetWeeklyIngredients";

const CartViewModel = () => {
    const [errorMessage] = useState<string>("");
    const [ingredients, setIngredients] = useState<ingredientsShoppingInterface[]>([]);
    const getWeeklyIngredients = async (date: string) => {
        const response = await getWeeklyIngredientsUseCase(date);
        if (response.length > 0) {
            setIngredients(response);
            console.log("RESULT: " + JSON.stringify(response))
        }

    }

    return {
        getWeeklyIngredients,
        errorMessage,
        ingredients
    }
}

export default CartViewModel;