import {stepsInterface} from "../interfaces/recipeInterface";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface IStepsCardProps{
    steps : stepsInterface[]
}

export const SimpleStepsCard = ({steps}: IStepsCardProps) => {
    return (
        <FlatList data={steps} renderItem={({item})=>
            <View style={stylesStepsCard.mainContainer}>
                <View style={stylesStepsCard.stepsNumberContainer}>
                    <Text style={stylesStepsCard.stepNumber}>{item.number_step}</Text>
                </View>
                <View style={stylesStepsCard.stepDescriptionContainer}>
                    <Text style={stylesStepsCard.stepDescription}>{item.description}</Text>
                </View>

            </View>

        }></FlatList>
    )
}

const stylesStepsCard = StyleSheet.create({
    mainContainer: {
        width: '90%',
        alignSelf: "center",
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 18,
    },
    stepsNumberContainer:{

    },
    stepNumber: {
        color: AppColors.white,
        fontSize: 12,
        backgroundColor: AppColors.primary,
        borderRadius:50,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 30,
        justifyContent: "center",
        alignContent: "center",
    },
    stepDescriptionContainer:{
      width: 210,
    },
    stepDescription: {
        color: AppColors.black,
        fontSize: 12,
        marginVertical: 20
    }
})