import {ingredientsInterface} from "../interfaces/recipeInterface";
import {FlatList, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface ISimpleIngredientProps{
    ingredients: ingredientsInterface[]
}

export const SimpleIngredientCard = ({ingredients}: ISimpleIngredientProps) => {
    return (
        <FlatList data={ingredients}
        renderItem={({item}) =>
            <View style={styleIngredientCard.mainContainer}>
                <Image style={styleIngredientCard.img} source={item.image}/>
                <Text style={styleIngredientCard.text}>{item.ingredientName}</Text>
                <Pressable style={styleIngredientCard.checkbox}/>
            </View>

        }></FlatList>
    )
}

const styleIngredientCard = StyleSheet.create({
    mainContainer: {
        width: '80%',
        alignSelf: "center",
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 18,
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 10,
        marginVertical: 15,
        marginStart: 10
    },
    text:{
        fontSize: 16,
        color: AppColors.black,
        marginEnd: '25%'
    },
    checkbox:{
        width: 20,
        height: 20,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 6,
        marginEnd: '10%',
        borderColor: AppColors.cardCategoryGrey,
    }

})