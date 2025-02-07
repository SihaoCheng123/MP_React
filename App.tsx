import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import RegisterScreen from "./app/presentation/views/auth/Register";
import LoginScreen from "./app/presentation/views/auth/Login";

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(){
  return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
           <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} options={{headerShown: true}}></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
