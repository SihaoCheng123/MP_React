import React from 'react';
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {UserInterface} from "../../../domain/entities/User";

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
      email : "",
      password: "",
      repeatPassword : "",
      name : "",
      phone : "",
      age: 0,
    })
    const onChangeRegister = (property:string, value: any) =>{
        setValues({...values, [property]: value});
    }
    const validateForm = () =>{
        if(values.name === ""){
            setErrorMessage("Name is required");
            return false;
        }
        if (values.email === ""){
            setErrorMessage("Email is required");
            return false;
        }
        if (values.password === ""){
            setErrorMessage("Password is required");
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
        if (values.repeatPassword != values.password){
            setErrorMessage("Passwords must match");
            return false;
        }
        return true;
    }
    const register = async () => {
        const dataSend: UserInterface = {
            email: values.email,
            password: values.password,
            user_data:{
                name: values.name,
                phone: values.phone,
                age: values.age,
            }
        }
        if (validateForm()) {
            const response = await RegisterAuthUseCase(dataSend);
            console.log("RESULT: " + JSON.stringify(response));
        }
    }
    return {
            ...values,
            onChangeRegister,
            register,
            errorMessage
    }
}

const LoginViewModel = () => {
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })
}

export default {RegisterViewModel};