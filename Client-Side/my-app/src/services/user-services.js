const userService = {

    login: async function (data) {
      const res = await fetch(`http://localhost:3333/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      });
      const text = await res.text();
      return res.status === 200 ? text : 'notlogged';
    },

  };
  
  export default userService;