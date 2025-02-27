import React from "react";
import {ingredientsShoppingInterface} from "../interfaces/recipeInterface";
import {Pressable, View, Image, StyleSheet, Text} from "react-native";
import {AppColors, AppFonts} from "../theme/AppTheme";

interface IIngredientCardProps {
    ingredients: ingredientsShoppingInterface
}

export const IngredientCard = ({ingredients}: IIngredientCardProps) => {
    return (
        <View style={styleIngredientsShopping.mainContainer}>
            <View style={styleIngredientsShopping.imgContainer}>
                <Image style={styleIngredientsShopping.img} source={ingredients.image}/>
            </View>
            <View style={styleIngredientsShopping.ingredientsDetailsContainer}>
                <Text style={styleIngredientsShopping.ingredientName}>{ingredients.name}</Text>
                <Text style={styleIngredientsShopping.ingredientCategory}>Category</Text>
                <View style={styleIngredientsShopping.amountContainer}>
                    <Image source={require("../../../assets/Minus.png")}/>
                    <Text style={styleIngredientsShopping.amountText}>1</Text>
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
        backgroundColor: AppColors.cardsIngredientsBackground,
        marginTop: 20
    },
    imgContainer: {
        padding: 10
    },
    img: {
        width: 70,
        height: 90,
        backgroundColor: AppColors.primary,
        borderRadius: 16,
    },
    ingredientsDetailsContainer:{
        display: 'flex',
        flexDirection: 'column',
        marginStart: 5,
        width: '40%',
    },
    ingredientName:{
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 5,
        color: AppColors.black,
        fontFamily: AppFonts.poppinsBold,
    },
    ingredientCategory:{
        color: AppColors.grey,
        fontSize: 12,
        marginBottom: 15,
        fontFamily: AppFonts.poppinsRegular,
    },
    amountContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 50
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