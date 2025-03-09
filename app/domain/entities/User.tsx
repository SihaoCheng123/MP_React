export interface UserInterface{
    id?: number,
    email: string,
    password: string,
    repeatPassword?: string,
    user_data: UserDataInterface
}

export interface UserDataInterface{
    name: string,
    phone: string,
    age: number,
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">

export interface UserLogin extends UserInterface{
    token?: string,
}

export interface PasswordChangeRequest{
    oldPassword: string,
    newPassword: string
}