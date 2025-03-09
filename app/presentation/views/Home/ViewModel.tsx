import {getRecipeByDateAndUserIdUseCase} from "../../../domain/useCases/recipes/GetRecipeByDateAndUserId";
import {useState} from "react";
import {detailedRecipeInterface} from "../../interfaces/recipeInterface";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const HomeViewModel = () => {
    const {user} = useUserLocalStorage();

    const [recipes, setRecipes] = useState<detailedRecipeInterface[]>([]);


    const getRecipeByDateAndUserId = async (date: string, user_id: number) => {
        console.log("fecha que ingresa al back: " + date + "id de usuario" + user_id);
        const response = await getRecipeByDateAndUserIdUseCase(date, user_id);
        if (response) {
            setRecipes(response);
            console.log("resultado: " + JSON.stringify(response));
        }
        if (response && Array.isArray(response) && response.length === 0) {
            console.log("No hay recetas...");
        }
        };
    return {
        recipes,
        getRecipeByDateAndUserId,
        user,
        setRecipes
    }
}

export default HomeViewModel;