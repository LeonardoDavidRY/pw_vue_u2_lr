import axios from 'axios';

const consumirAPI = async () => {
    const respuesta = await axios.get('https://yesno.wtf/api').then ( r => r.data);
    console.log(respuesta);
    return respuesta;
};
// Funcion fachada
export async function consumirAPIFachada() {
    return await consumirAPI();
}
