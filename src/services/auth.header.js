const authHeader = () => {
    const user = JSON.parse();

    if (user && user.accessToken){
        return { Authorization: "Bearer " + user.accessToken }
    } else return {};
}