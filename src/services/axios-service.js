import axios from 'axios'
// GET METHOD

const getData = async (url) => {
    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        return resultado;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

// POST METHOD

const createData = async (url, nuevaData) => {
    try {
        const opciones = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevaData),
        };
        const respuesta = await fetch(url, opciones);
        if (!respuesta.ok) throw new Error(respuesta.statusText);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};


// DELETE METHOD

const deleteData = async (url) => {
    try {
        const opciones = {
            method: "DELETE",
        };
        const respuesta = await fetch(url, opciones);
        if (!respuesta.ok) throw new Error(respuesta.statusText);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// EXPORT

export {
    createData,
    deleteData,
    getData
};