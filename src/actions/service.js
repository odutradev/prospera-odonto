import api from "../services/api";

const get = async (data) => {
    try {
    const response = await api.post('/service/get', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const create = async (data) => {
    try {
        const response = await api.post('/service/create', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const update = async (data) => {
    try {
        const response = await api.put('/service/update', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const remove = async (data) => {
    try {
        const response = await api.delete('/service/delete', { data });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    create, update, remove, get
}
