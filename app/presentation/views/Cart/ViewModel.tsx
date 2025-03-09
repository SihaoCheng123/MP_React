import {useState} from "react";
import {ingredientsShoppingInterface} from "../../interfaces/recipeInterface";
import {getWeeklyIngredientsUseCase} from "../../../domain/useCases/ingredientes/GetWeeklyIngredients";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const CartViewModel = () => {
    const [errorMessage] = useState<string>("");
    const [ingredients, setIngredients] = useState<ingredientsShoppingInterface[]>([]);
    const {user} = useUserLocalStorage()
    const getWeeklyIngredients = async (date: string, user_id : number) => {
        console.log("datos que manda" + date + user_id)
        const response = await getWeeklyIngredientsUseCase(date, user_id);

        console.log("se hizo la soliictud")
        setIngredients(response);
        console.log("RESULT: " + JSON.stringify(response))


    }

    return {
        getWeeklyIngredients,
        errorMessage,
        ingredients,
        user
    }
}

export default CartViewModel;