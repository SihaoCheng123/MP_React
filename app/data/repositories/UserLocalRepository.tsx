import {UserLocalRepository} from "../../domain/repositories/UserLocalRepositoy";
import {UserLogin} from "../../domain/entities/User";
import {LocalStorage} from "../sources/local/LocalStorage";


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
}