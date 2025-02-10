import {View} from "react-native";
import {SimpleRecipeCard} from "./RecipeCard";
import {ingredientsShoppingInterface, simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";
import {IngredientCard} from "./IngredientCardShopping";


const recipe: simpleRecipeInterface ={
    recipeName: "Flan",
    image: require("../../../assets/home.png"),
    ingredients: [{ingredientName: "1", price: 2}, {ingredientName: "2", price: 2}, {ingredientName: "3", price: 2}],
}

const ingredient: ingredientsShoppingInterface={
    ingredientName: "Arroz",
    image: require("../../../assets/home.png"),
    category: "Cereal",
    amount: 1
}

function PruebaComponenteScreen(){
    return(
        <View>
            <SimpleRecipeCard recipe={recipe}/>
            <IngredientCard ingredients={ingredient}/>
        </View>
    )
}

export default PruebaComponenteScreen;