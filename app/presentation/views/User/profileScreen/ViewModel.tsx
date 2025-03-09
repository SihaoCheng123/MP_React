import { useState, useEffect } from "react";
import {UserInterface} from "../../../../domain/entities/User";
import {updateUserUseCase} from "../../../../domain/useCases/userLocal/UpdateUserUseCase";
import {useUserLocalStorage} from "../../../hooks/UseUserLocalStorage";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";


const useProfileViewModel = (userId: number) => {
    const [values, setValues] = useState({
        email: '',
        name : "",
        phone : "",
        age: 0,
    });

    const onChangeUserUpdate = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const [errorMessage, setErrorMessage] = useState<string>("");

    const validateForm = () =>{
        if(values.name === ""){
            setErrorMessage("Name is required");
            return false;
        }
        if (values.email === ""){
            setErrorMessage("Email is required");
            return false;
        }
        if (values.phone === ""){
            setErrorMessage("Phone number is required");
            return false;
        }
        if (values.age === null){
            setErrorMessage("Age is required");
            return false;
        }
        return true;
    }
    const {user} = useUserLocalStorage()
    const updateUserData = async (userid: number) => {
        const dataSend: UserInterface = {
            email: values.email,
            user_data:{
                name: values.name,
                phone: values.phone,
                age: values.age,
            }
        }
        if (validateForm()) {
            const response = await updateUserUseCase(userid, dataSend);
            if (response) {
                await saveUserUseCase(response);
                console.log("Successfully updated user data");
            }
        }
    }

    return {
        user,
        updateUserData,
        errorMessage,
        ...values,
        onChangeUserUpdate,
    };
};

export default useProfileViewModel;
