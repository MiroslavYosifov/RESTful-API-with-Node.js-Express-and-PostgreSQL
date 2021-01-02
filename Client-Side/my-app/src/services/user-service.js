const userService = {
    registration: async function (data) {
        const response = await fetch('http://localhost:3333/api/user/registration', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        
        return await response.json();
    },
    login: async function (data) {
        const response = await fetch('http://localhost:3333/api/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        
        return await response.json();
    },
    logout: async function () {
        const response = await fetch('http://localhost:3333/api/user/logout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        });
        return await response.json();
    }
}

export default userService;

