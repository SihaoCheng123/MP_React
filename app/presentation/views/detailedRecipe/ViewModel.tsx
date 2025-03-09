import {useState} from "react";
import {detailedRecipeInterface} from "../../interfaces/recipeInterface";
import {getDetailedRecipeUseCase} from "../../../domain/useCases/recipes/GetDetailedRecipe";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const DetailedRecipeViewModel = () => {
    const [recipe, setRecipe] = useState<detailedRecipeInterface | undefined>(undefined)
    const {user} = useUserLocalStorage()
    const getDetailedRecipe = async (recipe_id: number) => {
        try {
            const response = await getDetailedRecipeUseCase(recipe_id);
            if (response) {
                setRecipe(response);
                console.log(JSON.stringify(response));
            } else {
                console.log("No se encontraron datos para el ID:", recipe_id);
            }
        } catch (error) {
            console.error("Error al obtener receta:", error);
        }
    }

    const setFavRecipeUseCase = async (recipe_id: number, user_id:number) => {
        const response = await setFavRecipeUseCase(recipe_id, user_id);
        if (response != null) {
            console.log("Saved recipe in fav")
        }
    }

    return {
        user,
        recipe,
        getDetailedRecipe,
        setFavRecipeUseCase
    }
}

export default DetailedRecipeViewModel;