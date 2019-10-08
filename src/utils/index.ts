export const objToArray = (obj: object): Array<any> => {
    return obj ? Object.values(obj) : []
}