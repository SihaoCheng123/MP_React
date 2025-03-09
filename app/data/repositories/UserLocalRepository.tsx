import {UserLocalRepository} from "../../domain/repositories/UserLocalRepositoy";
import {PasswordChangeRequest, UserInterface, UserLogin} from "../../domain/entities/User";
import {LocalStorage} from "../sources/local/LocalStorage";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";


export class UserLocalRepositoryImpl implements UserLocalRepository {
    async save(user: UserLogin): Promise<void> {
        const {save} = LocalStorage()
        await save("user_session", JSON.stringify(user));
    }

    async getUser(): Promise<UserLogin> {
        const {getUser} = LocalStorage()
        const data = await getUser("user_session")
        return JSON.parse(data as any) as UserLogin;
    }

    async deleteUser(): Promise<void> {
        const {deleteUser} = LocalStorage()
        await deleteUser("user_session")
    }

    async updatePassword(userid: number, passwordRequest:PasswordChangeRequest): Promise<UserInterface> {
        try {
            const response = await ApiDelivery.put(`users/change-password/${userid}`, passwordRequest)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            throw e
        }
    }
}