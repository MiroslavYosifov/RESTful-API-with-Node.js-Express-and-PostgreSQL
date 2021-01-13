export const userServices = (url) => {
    return {
        registration: async function (data) {
            const response = await fetch(`${url}/api/user/registration`, {
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
            const response = await fetch(`${url}/api/user/login`, {
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
            const response = await fetch(`${url}/api/user/logout`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include'
            });
            return await response.json();
        }
    }
}


