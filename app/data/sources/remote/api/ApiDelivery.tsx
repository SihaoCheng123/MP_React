import axios from 'axios';
import {detailedRecipeInterface} from "../../../../presentation/interfaces/recipeInterface";

const ApiDelivery = axios.create({

    baseURL: 'http://192.168.0.32:8080/api',
    headers:{
        "Content-Type": "application/json",
    }
})

/* para enviar los datos al backend*/
export const saveRecipe = async (recipeData: detailedRecipeInterface) => {
    try {
        const response = await ApiDelivery.post("/recipes", recipeData);

        return response.data; // para devolver la respuesta del back
    } catch (error) {
        console.error("")
    }
}
export {ApiDelivery}