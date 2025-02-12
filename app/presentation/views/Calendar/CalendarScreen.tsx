import React from "react";
import {Image, Text, View} from "react-native";
import {CalendarWeek} from "../../components/WeekCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {simpleRecipeInterface} from "../../interfaces/recipeInterface";
import stylesCalendar from "./StylesCalendar";

function CalendarScreen() {

    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const actualMonth = months[now.getMonth()];
    const actualYear = now.getFullYear();
    const recipes: simpleRecipeInterface[] = [{recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]},
        {recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]},
        {recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]}]


    return(
        <View style={stylesCalendar.mainContainer}>
            <View style={stylesCalendar.calendarContainer}>
                <View style={stylesCalendar.calendarChange}>
                    <Image source={require('../../../../assets/arrowBack.png')}
                    style={stylesCalendar.arrow}/>
                    <View style={stylesCalendar.calendarTexts}>
                        <Text style={stylesCalendar.monthText}>{actualMonth}</Text>
                        <Text style={stylesCalendar.yearText}>{actualYear}</Text>
                    </View>
                    <Image source={require('../../../../assets/arrowForward.png')}
                           style={stylesCalendar.arrow}/>
                </View>

                <CalendarWeek />
            </View>
            <View style={stylesCalendar.mealsAndRecipes}>
                <View style={stylesCalendar.meals}>
                    <Text>Breakfast</Text>
                    <Text>Lunch</Text>
                    <Text>Dinner</Text>
                </View>
                <View style={stylesCalendar.recipes}>
                    <SimpleRecipeCard recipe={recipes}/>
                </View>
            </View>
        </View>
    )
}

export default CalendarScreen