import {View} from "react-native";
import {SimpleRecipeCard} from "./RecipeCard";
import {
    ingredientsInterface,
    ingredientsShoppingInterface,
    simpleRecipeInterface,
    stepsInterface
} from "../interfaces/recipeInterface";
import {IngredientCard} from "./IngredientCardShopping";
import {SimpleIngredientCard} from "./IngredientSimpleCard";
import {SimpleStepsCard} from "./StepsCard";
import CalendarScreen from "../views/Calendar/CalendarScreen";
import {Calendar, WeekCalendar} from "react-native-calendars";
import {CalendarComponent} from "./Calendar";
import {CalendarWeek} from "./WeekCalendar";
import {AddRecipeScreen} from "../views/addRecipe/AddRecipeComponent";


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

const ingredientsList: ingredientsInterface[] =
    [{ingredientName: "Pan", price: 1, image:require("../../../assets/home.png")},
        {ingredientName: "Pan", price: 1, image:require("../../../assets/home.png")},
        {ingredientName: "Pan", price: 1, image:require("../../../assets/home.png")}]

const stepsList: stepsInterface[] = [
    {stepNumber: 1, stepDescription: "Paso 1"},
    {stepNumber: 2, stepDescription: "Paso 2"},
    {stepNumber: 3, stepDescription: "Paso 3"},
    ]
function PruebaComponenteScreen(){
    return(
        <View>
           <AddRecipeScreen/>
        </View>
    )
}

export default PruebaComponenteScreen;