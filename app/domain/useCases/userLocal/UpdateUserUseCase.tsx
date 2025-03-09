import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserInterface} from "../../entities/User";


const {updateUser} = new UserLocalRepositoryImpl();


export const updateUserUseCase = async (userid: number, userData: UserInterface) => {
    return await updateUser(userid, userData);
}