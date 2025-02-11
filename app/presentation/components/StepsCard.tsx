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
                <Text style={stylesStepsCard.stepNumber}>{item.stepNumber}</Text>
                <Text style={stylesStepsCard.stepDescription}>{item.stepDescription}</Text>
            </View>

        }></FlatList>
    )
}

const stylesStepsCard = StyleSheet.create({
    mainContainer: {
        width: '80%',
        alignSelf: "center",
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 18,
    },
    stepNumber: {
        color: AppColors.white,
        fontSize: 12,
        backgroundColor: AppColors.primary,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        marginHorizontal: 30,
        justifyContent: "center",
        alignContent: "center",
    },
    stepDescription: {
        color: AppColors.black,
        fontSize: 12,
        marginVertical: 20
    }
})