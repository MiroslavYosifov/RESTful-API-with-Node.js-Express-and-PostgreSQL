const workoutService = {
    getWorkouts: async function () {
        const response = await fetch('http://localhost:3333/api/workout', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
        
        return await response.json();
    }
}

export default workoutService;

