import { foodService } from './food-service';
import { userServices } from './user-service';
import { recipeService } from './recipe-service';
import { workoutService } from './workout-service';

// const localhostUrl = "http://localhost:3333"
//const productionUrl = "https://workout-organizer.herokuapp.com";

const url = "https://workout-organizer.herokuapp.com";

export const services = {
    foodService: foodService(url),
    userServices: userServices(url),
    recipeService: recipeService(url),
    workoutService: workoutService(url)
}