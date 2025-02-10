import {View} from "react-native";
import {SimpleRecipeCard} from "./RecipeCard";
import {simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";


const recipe: simpleRecipeInterface ={
    recipeName: "Flan",
    image: require("../../../assets/home.png"),
    ingredients: [{ingredientName: "1", price: 2}, {ingredientName: "2", price: 2}, {ingredientName: "3", price: 2}],
}

function PruebaComponenteScreen(){
    return(
        <View>
            <SimpleRecipeCard recipe={recipe}/>
        </View>
    )
}

export default PruebaComponenteScreen;