import api from "../services/api";

const signIn = async (data) => {
    try {
        const response = await api.post("/user/signin", data);
        await localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}   

const signUp = async (data) => {
    try {
        const response = await api.post("/user/signup", data);
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const me = async () => {
    try {
        const response = await api.get('/user/me');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const get = async () => {
    try {
        const response = await api.get('/user/users');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const getSpacesAndServices = async (author) => {
    try {
        const response = await api.post('/space/get-spaces-and-services', { author });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const update = async (data) => {
    try {
        const response = await api.put('/user/update', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const remove = async (data) => {
    try {
        const response = await api.delete('/user/delete', { data });
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    signIn, signUp, me, update, get, remove, getSpacesAndServices
}
