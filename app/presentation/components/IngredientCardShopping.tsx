import React from "react";
import {ingredientsShoppingInterface} from "../interfaces/recipeInterface";
import {Pressable, View, Image, StyleSheet, Text} from "react-native";

interface IIngredientCardProps{
    ingredients: ingredientsShoppingInterface
}

export const IngredientCard = ({ingredients}: IIngredientCardProps) => {
    return (
        <View>
            <View>
                <Image/>
            </View>
            <View>
                <Text>{ingredients.ingredientName}</Text>
                <Text>{ingredients.category}</Text>
            </View>
            <View>
                <Pressable/>
            </View>
        </View>
    )
}