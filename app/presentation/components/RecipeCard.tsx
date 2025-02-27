import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";

interface IRecipeCardProps {
    recipe: simpleRecipeInterface[];
    onPressFromInterface?: () => void;
}

export const SimpleRecipeCard = ({recipe, onPressFromInterface}: IRecipeCardProps) => {
const colors = [
    {id: 0, color: AppColors.white},
    {id: 1, color: AppColors.secondary},
    {id: 2, color: AppColors.primary}
 ]

    if (recipe.length > 0){
        return (
            <FlatList data={recipe}
                      renderItem={({item, index}) =>
                          <TouchableOpacity style={{...styleSimpleRecipeCardStyle.mainRecipeCardContainer, backgroundColor: colors[index].color}}
                          onPress={onPressFromInterface}>
                              <Text style={styleSimpleRecipeCardStyle.recipeNameText}>{item.name}</Text>
                              <View style={styleSimpleRecipeCardStyle.imgAndIngredientsContainer}>
                                  <Image style={styleSimpleRecipeCardStyle.ingredientImg} source={item.image}/>
                                  <View style={styleSimpleRecipeCardStyle.ingredientsContainer}>
                                      <FlatList
                                          data={item.ingredients}
                                          renderItem={
                                              ({item}) =>
                                                  <Text style={styleSimpleRecipeCardStyle.ingredientsText}>{item.name}</Text>
                                          }
                                      >
                                      </FlatList>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      }></FlatList>
        )
    }else {
        return (
            <View style={noRecipeCardStyle.mainRecipeCardContainer}>
                <Text style={noRecipeCardStyle.text}>Add a meal for today</Text>
            </View>
        )
    }

}

const styleSimpleRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '75%',
        flexDirection: 'column',
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 16,
        marginVertical: 30,
    },
    recipeNameText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 13,
        marginBottom: 5,
    },
    imgAndIngredientsContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20,
        justifyContent: 'space-around',
        marginTop: 10
    },
    ingredientImg: {
        width: 60,
        height: 60,
    },
    ingredientsContainer:{
      display: 'flex',
      flexDirection: 'column',
        alignItems: 'center',
    },
    ingredientsText: {
        fontSize: 16,
    }
})

const noRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 16,
        backgroundColor: AppColors.white
    },
    text:{
        textAlign: 'center',
        marginVertical: 37,
        marginHorizontal: 74,
        fontSize: 16,
        color: AppColors.grey,
    }
})