import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = () =>{
    const save = async (key:string, value:string) => {
        try{
            return await AsyncStorage.setItem(key, value);
        }catch(error){
            console.error("Error in save local storage" + error);
        }
    }

    const getUser = async (key:string) => {
        try {
            return await AsyncStorage.getItem(key);
        }catch (error){
            console.error("Error in getUser local storage" + error);
        }
    }

    const deleteUser = async (key:string) => {
        try {
            await AsyncStorage.removeItem(key);
        }catch(error){
            console.error("Error deleteUser local storage" + error);
        }
    }
    return {
        save,
        getUser,
        deleteUser,
    }
}