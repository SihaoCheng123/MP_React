import React from "react";
import {ingredientsShoppingInterface} from "../interfaces/recipeInterface";
import {Pressable, View, Image, StyleSheet, Text} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface IIngredientCardProps{
    ingredients: ingredientsShoppingInterface
}

export const IngredientCard = ({ingredients}: IIngredientCardProps) => {
    return (
        <View style={styleIngredientsShopping.mainContainer}>
            <View style={styleIngredientsShopping.imgContainer}>
                <Image style={styleIngredientsShopping.img} source={ingredients.image}/>
            </View>
            <View style={styleIngredientsShopping.ingredientsDetailsContainer}>
                <Text style={styleIngredientsShopping.ingredientName}>{ingredients.ingredientName}</Text>
                <Text style={styleIngredientsShopping.ingredientCategory}>{ingredients.category}</Text>
                <View style={styleIngredientsShopping.amountContainer}>
                    <Image source={require("../../../assets/Minus.png")}/>
                    <Text style={styleIngredientsShopping.amountText}>{ingredients.amount}</Text>
                    <Image source={require("../../../assets/Add.png")}/>
                </View>
            </View>
            <View>
                <Pressable style={styleIngredientsShopping.checkbox}/>
            </View>
        </View>
    )
}

const styleIngredientsShopping = StyleSheet.create({
    mainContainer: {
        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppColors.white,
    },
    imgContainer: {
        padding: 10
    },
    img: {
        width: 70,
        height: 90,
    },
    ingredientsDetailsContainer:{
        flexDirection: 'column',
        marginEnd: '20%',

    },
    ingredientName:{
        fontWeight: 'bold',
        fontSize: 12,
        color: AppColors.black,
    },
    ingredientCategory:{
        color: AppColors.grey,
        fontSize: 12,
        marginBottom: 10
    },
    amountContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    amountText:{
      fontSize: 14,
      color: AppColors.black,
        marginHorizontal: 5
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 8,
        marginEnd: '10%'
    }
})