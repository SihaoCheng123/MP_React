import {ingredientsInterface} from "../interfaces/recipeInterface";
import {FlatList, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AppColors, AppFonts} from "../theme/AppTheme";

interface ISimpleIngredientProps{
    ingredients: ingredientsInterface[]
}

export const SimpleIngredientCard = ({ingredients}: ISimpleIngredientProps) => {
    return (
        <FlatList data={ingredients}
        renderItem={({item}) =>
            <View style={styleIngredientCard.mainContainer}>
                <View style={styleIngredientCard.imgContainer}>
                    <Image style={styleIngredientCard.img} source={item.image}/>
                </View>

                <View style={styleIngredientCard.textContainer}>
                    <Text style={styleIngredientCard.text}>{item.name}</Text>
                </View>
                <View style={styleIngredientCard.pressContainer}>
                    <Pressable style={styleIngredientCard.checkbox}/>
                </View>

            </View>

        }></FlatList>
    )
}

const styleIngredientCard = StyleSheet.create({
    mainContainer: {
        width: '90%',
        alignSelf: "center",
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 18,
    },
    imgContainer:{
        //width:'10%',
        marginStart: 10
    },
    img:{
        width: 45,
        height: 45,
        borderRadius: 10,
        marginVertical: 15,
        marginStart: 10,
    },
    textContainer:{
        justifyContent: "flex-start",
        textAlign: "left",
        width: 150,
    },
    text:{
        fontSize: 15,
        color: AppColors.black,
        fontFamily: AppFonts.poppinsMedium,
    },
    pressContainer:{
      //width:'100%',
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