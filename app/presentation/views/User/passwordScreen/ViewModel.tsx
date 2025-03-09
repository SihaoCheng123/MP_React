import { useState } from "react";
import {updatePasswordUseCase} from "../../../../domain/useCases/userLocal/ChangePasswordUseCase";
import {PasswordChangeRequest} from "../../../../domain/entities/User";
import {useUserLocalStorage} from "../../../hooks/UseUserLocalStorage";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";

const usePasswordViewModel = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const {user} = useUserLocalStorage()

    const onChangePassword = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    };

    const validateForm = () => {
        if (values.oldPassword === "") {
            setErrorMessage("Old password is required");
            return false;
        }
        if (values.newPassword === "") {
            setErrorMessage("New password is required");
            return false;
        }
        if (values.confirmPassword !== values.newPassword) {
            setErrorMessage("Passwords must match");
            return false;
        }
        return true;
    };

    const handleChangePassword = async (userid: number) => {
        if (validateForm()){
            const dataPassword: PasswordChangeRequest = {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            }
            const response = await updatePasswordUseCase(userid, dataPassword);
            await saveUserUseCase(response)
            console.log("Response:", response);
        }

    };

    return {
        ...values,
        onChangePassword,
        handleChangePassword,
        errorMessage,
        successMessage,
        user,
    };
};

export default usePasswordViewModel;
