import {detailedRecipeInterface} from "../../presentation/interfaces/recipeInterface";
import {UserInterface} from "./User";

export interface RecipeWithUserId extends detailedRecipeInterface{

}

export interface UserIdInterface extends Pick<UserInterface, "id"> {}