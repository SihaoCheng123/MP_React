import {useState} from "react";
import {detailedRecipeInterface, ingredientsInterface} from "../../interfaces/recipeInterface";
import {createRecipeUseCase} from "../../../domain/useCases/recipes/CreateRecipe";

const AddRecipeViewModel = () => {
    const[errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    // información de la receta en un solo estado, para actualizar el codigo
    const[newRecipe, setNewRecipe] = useState<detailedRecipeInterface>({
        name:"",
        image:"",
        time:"",
        date:"",
        rations:1,
        ingredients: [],
        steps: [],
        category: "",
    });
    const [selectedCategory, setSelectedCategory] = useState("");


    // para que no se creen muchas setStae el handleChange actualizaria cualquier propiedad de newRecipe
    const onChangeRecipe = (property: keyof detailedRecipeInterface, value: any) => {
        setNewRecipe((prevRecipe) => ({
            ...prevRecipe,[property] : value}));
    };

    const [ingredientInput, setIngredientInput] = useState("");

    const addIngredient = () => {
        if (ingredientInput.trim() !== "") {
            const newIngredient: ingredientsInterface = {
                name: ingredientInput.trim(),
            };

            setNewRecipe({
                ...newRecipe,
                ingredients:[...newRecipe.ingredients, newIngredient]
            });

            setIngredientInput("");
            setSuccessMessage("Ingredient has been successfully added");
            setTimeout(() => setSuccessMessage(""), 2000);
        } else {
            setErrorMessage("Ingredient name cannot be empty");
        }
    };

    const [stepInput, setStepInput] = useState<string>("");

    const addStep = () => {
        if (stepInput.trim() !== "") {
            setNewRecipe(prevRecipe => ({
                ...prevRecipe,
                steps:
                    [...prevRecipe.steps,
                        {
                            number_step: prevRecipe.steps.length + 1,
                            description: stepInput.trim(),
                        }],
            }));

            setStepInput("");
            setSuccessMessage("Step has been successfully added");
            setTimeout(()=> setSuccessMessage(""), 2000);
        } else {
            setErrorMessage("Step cannot be empty")
        }
    }

    const [dateInput, setDateInput] = useState<string>("");

    const addDate = () => {
        if (newRecipe.date.trim() !== "") {
            setNewRecipe({
                ...newRecipe, date: dateInput.trim()
            });

            setDateInput("");
            setSuccessMessage("Date has been successfully added");
            setTimeout(() => setSuccessMessage(""), 2000);
        } else {
            setErrorMessage("Date cannot be empty");
        }
    }

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
        setNewRecipe({...newRecipe, category: category});
    };

    const validateForm = () => {
        if (newRecipe.name === "") {
            setErrorMessage("Recipe name is required");
            return false;
        }
        if (newRecipe.time === ""){
            setErrorMessage("Time is required");
            return false;
        }
        if (!newRecipe.date || newRecipe.date.trim() === ""){
            setErrorMessage("Date is required");
            return false;
        }
        if (newRecipe.steps.length === 0){
            setErrorMessage("Steps are required");
            return false;
        }
        return true;
    };


    const saveNewRecipe = async (userId: number|undefined) => {
        console.log("Add button pressed");

        if (validateForm()) {
            try {

                console.log("Steps before formatting", newRecipe.steps);

                const recipeToSend = {
                    ...newRecipe,
                }

                console.log("Formatted recipe to be saved:" + JSON.stringify(recipeToSend, null, 2));

               // console.log("Recipe to be saved:" + JSON.stringify(recipeToSend, null, 2));
                const response = await createRecipeUseCase(recipeToSend, userId);

                console.log("Recipe saved", response);
                setErrorMessage("")
                setNewRecipe({
                    name:"",
                    image:"",
                    time:"",
                    date:"",
                    rations:1,
                    ingredients: [],
                    steps: [],
                    category: "",
                });

                setSuccessMessage("Recipe saved successfully!");
            } catch (error){
                console.error("Error saving the recipe", error);
                setErrorMessage("Failed to save recipe. Please try again");
            }
        }
    };

    return {
        newRecipe,
        setNewRecipe,
        ingredientInput,
        setIngredientInput,
        stepInput,
        setStepInput,
        addStep,
        addDate,
        onChangeRecipe,
        addIngredient,
        saveNewRecipe,
        selectedCategory,
        selectCategory,
        errorMessage,
        successMessage,
    };
};

export default AddRecipeViewModel;