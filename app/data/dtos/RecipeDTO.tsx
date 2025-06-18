export interface IngredientDTO {
    name: string;
    color?: string;
    price?: number;
    image?: any;
}

export interface StepDTO {
    number_step: number;
    description: string;
}

export interface RecipeDTO {
    id?: number;
    name: string;
    image?: string;
    date: string;
    time: string;
    rations: number;
    ingredients: IngredientDTO[];
    steps: StepDTO[];
    category: string;
    user_id?: number;
}