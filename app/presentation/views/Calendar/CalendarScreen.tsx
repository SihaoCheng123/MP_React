import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {CalendarWeek} from "../../components/WeekCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {simpleRecipeInterface} from "../../interfaces/recipeInterface";
import {AppColors} from "../../theme/AppTheme";

function CalendarScreen() {

    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const actualMonth = months[now.getMonth()];
    const actualYear = now.getFullYear();
    const recipes: simpleRecipeInterface[] = [{recipeName: "Arroz con huevo", ingredients:[{ingredientName: ["Arroz","Huevo", "Ketchup"]}]},
        {recipeName: "Arroz con huevo", ingredients:[{ingredientName: ["Arroz","Huevo", "Ketchup"]}]},
        {recipeName: "Arroz con huevo", ingredients:[{ingredientName: ["Arroz","Huevo", "Ketchup"]}]}]


    return(
        <View style={stylesCalendar.mainContainer}>
            <View style={stylesCalendar.calendarContainer}>
                <Text style={stylesCalendar.monthText}>{actualMonth}</Text>
                <Text style={stylesCalendar.yearText}>{actualYear}</Text>
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

const stylesCalendar = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: AppColors.background
    },
    calendarContainer: {
        marginTop: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: AppColors.grey
    },
    monthText: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColors.black,
    },
    yearText: {
        fontSize: 12,
        color: AppColors.secondary,
        marginBottom: 35
    },
    mealsAndRecipes:{
      display: "flex",
      flexDirection: "row",
        justifyContent: "space-between",
    },
    meals:{
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "30%",
        borderEndWidth: 1,
        borderEndColor: AppColors.grey,
        height: '100%',
        alignItems: "center"
    },
    recipes:{
        width: "80%",
    }
})

export default CalendarScreen