import axios from 'axios'
// GET METHOD

const getData = async (url) => {
    try {
        const respuesta = await axios.get(url)
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

        const respuesta = await axios.post(url, nuevaData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
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

        const respuesta = await axios.delete(url);
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