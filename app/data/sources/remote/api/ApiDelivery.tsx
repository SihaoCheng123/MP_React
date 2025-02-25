import axios from 'axios';
import {detailedRecipeInterface} from "../../../../presentation/interfaces/recipeInterface";

const ApiDelivery = axios.create({

    baseURL: 'http://192.168.1.165:8080/api',
    headers:{
        "Content-Type": "application/json",
    }
})

export {ApiDelivery}