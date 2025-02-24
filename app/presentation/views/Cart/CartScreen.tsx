import React from "react";
import {Text, View} from "react-native";
import styleCartScreen from "./StyleCartScreen";



function CartScreen() {

    const filters = [
        { id: "1", label: "Todos"},
        { id: "2", label: "Comida"},
        { id: "3", label: "Bebidas"},
    ];

    return(
        <View style={styleCartScreen.mainContainer}>
            <View>
                <View>
                    <Text>Category</Text>
                </View>
                <View>
                    <Text>Filtros</Text>
                </View>
                <View>

                </View>

            </View>
        </View>
    )
}

export default CartScreen