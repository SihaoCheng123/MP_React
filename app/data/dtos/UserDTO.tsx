export interface UserDTO{
    id?: number;
    email: string;
    password?: string;
    repeatPassword?: string;
    user_data: {
        name: string;
        phone: string;
        age: number;
    };
}