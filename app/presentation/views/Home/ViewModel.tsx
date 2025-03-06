import {getRecipeByDateAndUserIdUseCase} from "../../../domain/useCases/recipes/GetRecipeByDateAndUserId";
import {useState} from "react";
import {detailedRecipeInterface} from "../../interfaces/recipeInterface";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const HomeViewModel = () => {
    const {user} = useUserLocalStorage();
    const [recipes, setRecipes] = useState<detailedRecipeInterface[]>([]);
    const getRecipeByDateAndUserId = async (date: string, user_id: number) => {
        const response = await getRecipeByDateAndUserIdUseCase(date, user_id);
        if (response && response.length > 0) {
            setRecipes(response);
            console.log("resultado: " + JSON.stringify(response));
        }

        };
    return {
        recipes,
        getRecipeByDateAndUserId,
        user
    }
}

export default HomeViewModel;