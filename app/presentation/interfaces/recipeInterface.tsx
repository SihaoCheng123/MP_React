export interface ingredientsInterface {
    ingredientName: string,
    price?: number,
}

export interface ingredientsShoppingInterface{
    ingredientName: string,
    image?: any,
    category: string,
    price?: number,
    amount: number,
}

export interface stepsInterface {
    stepNumber: number,
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
    time: string,
    serving: string,
    ingredients: ingredientsInterface[],
    steps: stepsInterface[]
}

