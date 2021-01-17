export const foodService = (url) => {
    return {
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
        deleteFood: async function (data) {
            const response = await fetch(`${url}/api/food`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        },
        getLimitedFoods: async function (data) {
            console.log(data);
            const response = await fetch(`${url}/api/food`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        },
    }
}

// const foodService = {
//     getFoods: async function () {
//         const response = await fetch(`${url}/api/food`, {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//         });
        
//         return await response.json();
//     },
//     addFood: async function (data) {
//         const response = await fetch(`${url}/api/food`, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data),
//         });
        
//         return await response.json();
//     },
   
// }

// export default foodService;

// to split in one file


