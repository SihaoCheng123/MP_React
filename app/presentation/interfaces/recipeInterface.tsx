export interface ingredientsInterface {
    ingredientName: string,
    color?: string,
    price?: number,
    image?: any,
}

export interface ingredientsShoppingInterface{
    ingredientName: string,
    image?: any,
    category: string,
    price?: number,
    amount: number,
}

export interface stepsInterface {
    stepNumber?: number,
    stepDescription: string,
}

export interface simpleRecipeInterface{
    recipeName: string,
    image?: any,
    ingredients: ingredientsInterface[],
}


export interface detailedRecipeInterface{
    recipeName: string,
    image?: string,
    date: string,
    time: string,
    serving: number,
    ingredients: ingredientsInterface[],
    steps: stepsInterface[],
    category: string,
    user_id?: number,
}

