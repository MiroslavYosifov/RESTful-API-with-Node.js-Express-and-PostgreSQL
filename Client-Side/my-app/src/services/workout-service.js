const localhostUrl = "http://localhost:3333"
const productionUrl = "https://workout-organizer.herokuapp.com";
const url = productionUrl;

const workoutService = {
    getWorkouts: async function () {
        const response = await fetch(`${url}/api/workout`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
        
        return await response.json();
    }
}

export default workoutService;

