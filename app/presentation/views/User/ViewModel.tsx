import { useState } from "react";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";

const CHANGE_PASSWORD_ENDPOINT = "/users/change-password"; // Reemplaza con tu URL real

const usePasswordViewModel = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChangePassword = async () => {
        setErrorMessage("");
        setSuccessMessage("");

        if (!oldPassword || !newPassword || !confirmPassword) {
            setErrorMessage("All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("New passwords do not match");
            return;
        }

        try {
            const response = await ApiDelivery.put(CHANGE_PASSWORD_ENDPOINT, {
                    oldPassword,
                    newPassword
            });

            const data = response.data;

            if (response.status !== 200) {
                setErrorMessage(data.message || "Error updating password");
            } else {
                setSuccessMessage("Password changed successfully");
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Try again later.");
        }
    };

    return {
        oldPassword,
        setOldPassword,
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        errorMessage,
        successMessage,
        handleChangePassword
    };
};

export default usePasswordViewModel;
