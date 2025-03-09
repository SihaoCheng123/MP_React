import {detailedRecipeInterface} from "../../../interfaces/recipeInterface";
import {useState} from "react";
import {getAllRecipesByUserUseCase} from "../../../../domain/useCases/recipes/GetAllRecipesByUser";
import {useUserLocalStorage} from "../../../hooks/UseUserLocalStorage";

const preparedRecipeViewModel = () => {
    const [recipes, setRecipe] = useState<detailedRecipeInterface[]>([]);
    const {user} = useUserLocalStorage()
    const getAllRecipesByUser = async (user_id: number) => {
        const response = await getAllRecipesByUserUseCase(user_id)
        if (response){
            setRecipe(response)
            console.log("RESULT: " + JSON.stringify(response))
        }
    }
    return{
        recipes,
        getAllRecipesByUser,
        user
    }
}

export default preparedRecipeViewModel;