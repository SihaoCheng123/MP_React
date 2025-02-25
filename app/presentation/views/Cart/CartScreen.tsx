import React from "react";
import {FlatList, Text, View} from "react-native";
import styleCartScreen from "./StyleCartScreen";
import {FilterButton} from "../../components/FilterButton";
import {IngredientCard} from "../../components/IngredientCardShopping";
import {ingredientsShoppingInterface} from "../../interfaces/recipeInterface";



function CartScreen() {

    const filters = [
        "All", "Fruits", "Vegetables", "Meals"
    ];

    const Ingredients: ingredientsShoppingInterface [] = [
        {ingredientName: "Lechuga", category: 'Vegetables', price: 0.00, amount: 0.00,},
        {ingredientName: "Pollo", category: 'Meals', price: 0.00, amount: 0.00,},
        {ingredientName: "Arroz", category: 'Meals', price: 0.00, amount: 0.00,},

    ];

    return(
        <View style={styleCartScreen.mainContainer}>
            <View style={styleCartScreen.container}>
                <View>
                    <Text style={styleCartScreen.text}>Category</Text>
                </View>
                <View>
                    <FilterButton filters={filters}/>
                </View>
                <View>
                    <FlatList
                        style={styleCartScreen.productContainer}
                        data={Ingredients}
                        renderItem={({ item } ) =><IngredientCard ingredients={item}/>}/>
                </View>

            </View>
        </View>
    )
}

export default CartScreen