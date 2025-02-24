import React from "react";
import {FlatList, Image, Pressable, Text, View} from "react-native";

interface FilterButtonProps {
    filters: Filter[];
    onFilterSelect: (filterId: string) => void;
}

export const FilterButton = ({filters, onFilterSelect}: FilterButtonProps) => {
    return (
        <FlatList
        horizontal
        data={filters}
        />
    )
}