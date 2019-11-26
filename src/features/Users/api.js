import fetchAPI from "../../commons/api";

export const getUsers = () => {
    console.log('get')
    return fetchAPI.get(
        `/api/users`
    );
};
