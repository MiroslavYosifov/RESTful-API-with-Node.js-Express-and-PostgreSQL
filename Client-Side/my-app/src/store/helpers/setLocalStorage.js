export const setLocacalStorage = (function () {
    function removeAuthData (props) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('isAdmin');
    }

    function addAuthData (props) {
        const isAdmin =  props.user.roles ? props.user.roles.includes('admin') : "";
        
        localStorage.setItem('token', props.token);
        localStorage.setItem('userId', props.user.id);
        localStorage.setItem('username', props.user.username);
        localStorage.setItem('isAdmin', isAdmin);
    }

    function get () {
       
    }

    return {
        removeAuthData,
        addAuthData,
        get
    }
})();