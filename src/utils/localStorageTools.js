export const getToStorage =  (key) => {
    const element = JSON.parse(sessionStorage.getItem(key));
    return element
};

export const setToStorage = (key, value) =>{
    sessionStorage.setItem(key, JSON.stringify(value));
}