export interface ingredientsInterface {
    name: string,
    color?: string,
    price?: number,
    image?: any,
}

export interface ingredientsShoppingInterface{
    name: string,
    image?: any,
    category: string,
    price?: number,
    amount: number,
}

export interface stepsInterface {
    number_step: number,
    description: string,
}

export interface simpleRecipeInterface{
    name: string,
    image?: any,
    ingredients: ingredientsInterface[],
}


export interface detailedRecipeInterface{
    name: string,
    image?: string,
    date: string,
    time: string,
    serving: number,
    ingredients: ingredientsInterface[],
    steps: stepsInterface[],
    category: string,
    user_id?: number,
}

