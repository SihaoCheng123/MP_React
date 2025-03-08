import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface FilterButtonProps {
    filters: String[];
    onFilterSelect?: (filterId: string) => void;
}

export const FilterButton = ({filters}: FilterButtonProps) => {

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    return (
        <FlatList
        horizontal
        data={filters}
        renderItem={({ item } ) =>
            <TouchableOpacity onPress={() => setSelectedFilter(item.toString())}>
                <View
                    style={[
                        styleFilterButton.mainContainer,
                        {
                            backgroundColor: selectedFilter === item ? AppColors.secondary : AppColors.cardsIngredientsBackground,
                        },
                    ]}
                >
                    <Text>{item}</Text>
                </View>
            </TouchableOpacity>
        }
        />
    )
}

const styleFilterButton = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingStart: 25,
        paddingEnd: 25,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: AppColors.secondary,
        borderColor: AppColors.secondary,
        marginStart: 15,
        marginTop: 26,
        borderWidth: 1,
    }
})