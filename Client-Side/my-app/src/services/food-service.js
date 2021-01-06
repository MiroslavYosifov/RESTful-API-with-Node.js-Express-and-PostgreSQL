const localhostUrl = "http://localhost:3333"
const productionUrl = "https://workout-organizer.herokuapp.com";
const url = productionUrl;

const foodService = {
    getFoods: async function () {
        const response = await fetch(`${url}/api/food`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });
        
        return await response.json();
    },
    addFood: async function (data) {
        const response = await fetch(`${url}/api/food`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        
        return await response.json();
    },
    editFoods: async function (data) {
        const response = await fetch(`${url}/api/food`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        
        return await response.json();
    },
}

export default foodService;

