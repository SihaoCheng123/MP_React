import React, {memo, useEffect} from "react";
import {FlatList, Text, View} from "react-native";
import styleCartScreen from "./StyleCartScreen";
import {FilterButton} from "../../components/FilterButton";
import {IngredientCard} from "../../components/IngredientCardShopping";
import CartViewModel from "./ViewModel";

function CartScreen() {
    const today = new Date();
    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0]
    }

    const {getWeeklyIngredients, ingredients} = CartViewModel()

    useEffect(() => {
        getWeeklyIngredients(formatDate(today))
    }, []);
    const filters = [
        "All", "Fruits", "Vegetables", "Meals"
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
                        contentContainerStyle={{paddingBottom: 100}}
                        data={ingredients}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item } ) =>
                            <IngredientCard ingredients={item}/>}/>
                </View>

            </View>
        </View>
    )
}

export default memo(CartScreen)