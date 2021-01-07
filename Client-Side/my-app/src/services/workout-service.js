export default (url) => {
    return {
        getWorkouts: async function () {
            const response = await fetch(`${url}/api/workout`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            });
            
            return await response.json();
        },
    }
};

