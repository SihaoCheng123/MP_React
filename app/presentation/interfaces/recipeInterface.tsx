export interface ingredientsInterface {
    name: string,
    color?: string,
    price?: number,
    image?: any,
}

export interface ingredientsShoppingInterface{
    id?: number,
    name: string,
    image?: any,
    category?: string,
    price?: number,
}

export interface stepsInterface {
    number_step: number,
    description: string,
}

export interface simpleRecipeInterface{
    name: string,
    image?: any,
    ingredients: ingredientsInterface[],
    category: string
}


export interface detailedRecipeInterface{
    id?: number,
    name: string,
    image?: string,
    date: string,
    time: string,
    rations: number,
    ingredients: ingredientsInterface[],
    steps: stepsInterface[],
    category: string,
    user_id?: number,
}

