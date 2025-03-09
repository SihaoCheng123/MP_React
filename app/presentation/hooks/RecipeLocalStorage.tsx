import {useState} from "react";
import {detailedRecipeInterface} from "../interfaces/recipeInterface";

export const RecipeLocalStorage = () => {
    const [recipeId, setRecipeId] = useState<number|undefined>(undefined)

    const selectRecipe = (recipe:detailedRecipeInterface) => {
        setRecipeId(recipeId);
    };

    return {
        setRecipeId,
        recipeId,
    };
}