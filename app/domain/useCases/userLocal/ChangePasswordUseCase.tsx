import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {PasswordChangeRequest} from "../../entities/User";

const {updatePassword} = new UserLocalRepositoryImpl()

export const updatePasswordUseCase = async (userid: number, passwordRequest: PasswordChangeRequest) => {
    return await updatePassword(userid, passwordRequest)
}