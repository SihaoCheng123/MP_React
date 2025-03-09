import axios from 'axios';
import {detailedRecipeInterface} from "../../../../presentation/interfaces/recipeInterface";

const ApiDelivery = axios.create({

<<<<<<< HEAD
    baseURL: 'http://192.168.0.32:8080/api',
=======
    baseURL: 'http://192.168.1.186:8080/api',
>>>>>>> master
    headers:{
        "Content-Type": "application/json",
    }
})

export {ApiDelivery}