import {PasswordChangeRequest, UserInterface, UserLogin} from "../entities/User";

export interface UserLocalRepository{
    save(user: UserLogin): Promise<void>;
    getUser(): Promise<UserLogin>;
    deleteUser(): Promise<void>;
    updatePassword(userid: number, passwordRequest:PasswordChangeRequest): Promise<UserInterface>;
    updateUser(userid: number, userData: UserInterface): Promise<UserInterface>;
}