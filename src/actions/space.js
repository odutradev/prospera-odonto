import api from "../services/api";

const get = async () => {
    try {
        const response = await api.get('/space/get');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const create = async (data) => {
    try {
        const response = await api.post('/space/create', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const update = async (data) => {
    try {
        const response = await api.put('/space/update', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const remove = async (data) => {
    try {
        const response = await api.delete('/space/delete', { data });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    create, update, remove, get
}
