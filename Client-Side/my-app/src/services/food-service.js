const foodService = {
    getFoods: async function () {
        const response = await fetch('http://localhost:3333/api/food', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
        
        return await response.json();
    },
    addFood: async function (data) {
        const response = await fetch('http://localhost:3333/api/food', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        
        return await response.json();
    },
}

export default foodService;

