import {UserLogin} from "../../domain/entities/User";
import React, {useEffect, useState} from "react";

export const useUserLocalStorage = () => {
    const [user, setUser] = useState<UserLogin>()
    useEffect(() => {
        getUserSession()
    })

    const getUserSession = async () => {
        const user = await getUserUseCase()
        setUser(user)
    }

    const deleteUserSession = async () => {
        const session = await deleteUserUseCase()
    }

    return{
        user,
        getUserSession,
        deleteUserSession,
    }
}