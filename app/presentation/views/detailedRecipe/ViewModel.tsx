import {useState} from "react";
import {detailedRecipeInterface} from "../../interfaces/recipeInterface";
import {getDetailedRecipeUseCase} from "../../../domain/useCases/recipes/GetDetailedRecipe";

const DetailedRecipeViewModel = () => {
    const [recipe, setRecipe] = useState<detailedRecipeInterface | undefined>(undefined)
    const getDetailedRecipe = async (recipe_id: number) => {
        const response = await getDetailedRecipeUseCase(recipe_id);
        if (response !== null) {
            setRecipe(response);
            console.log("RESULT: " + JSON.stringify(response));
        }
    }

    return {
        recipe,
        getDetailedRecipe
    }
}

export default DetailedRecipeViewModel;