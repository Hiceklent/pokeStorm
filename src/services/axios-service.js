import axios from 'axios';

// GET METHOD

const getData = async (URL_API) => {
    try {
        const respuesta = await axios.get(URL_API);
        // if (!respuesta.ok){
        //     throw new Error(respuesta.statusText);
        // }
        // const resultado = await respuesta.json();
        return respuesta;
        console.log(respuesta);
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

// POST METHOD

const createData = async (URL_API, nuevaData) => {
    try {

        const respuesta = await axios.post(URL_API, nuevaData, {
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

const deleteData = async (URL_API) => {
    try {

        const respuesta = await axios.delete(URL_API);
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