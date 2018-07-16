export const getUsername = () => {
    const location = window.location;
    // location.pathname is of format /user/username
    const username = location.pathname.split('/')[2]
    return username;
};
