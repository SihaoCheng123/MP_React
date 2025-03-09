import { useState } from "react";
import {updatePasswordUseCase} from "../../../domain/useCases/userLocal/ChangePasswordUseCase";
import {PasswordChangeRequest} from "../../../domain/entities/User";

const usePasswordViewModel = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

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

    const handleChangePassword = async (userid: number, passwordRequest: PasswordChangeRequest) => {
        if (!validateForm()) return;

        const response = await updatePasswordUseCase(userid, passwordRequest);
        console.log("Response:", response);

    };

    return {
        ...values,
        onChangePassword,
        handleChangePassword,
        errorMessage,
        successMessage,
    };
};

export default usePasswordViewModel;
