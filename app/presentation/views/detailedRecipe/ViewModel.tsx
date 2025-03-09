import {useState} from "react";
import {detailedRecipeInterface} from "../../interfaces/recipeInterface";
import {getDetailedRecipeUseCase} from "../../../domain/useCases/recipes/GetDetailedRecipe";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const DetailedRecipeViewModel = () => {
    const [recipe, setRecipe] = useState<detailedRecipeInterface | undefined>(undefined)
    const {user} = useUserLocalStorage()
    const getDetailedRecipe = async (recipe_id: number) => {
        const response = await getDetailedRecipeUseCase(recipe_id);
        if (response !== null) {
            setRecipe(response);
            console.log("RESULT: " + JSON.stringify(response));
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