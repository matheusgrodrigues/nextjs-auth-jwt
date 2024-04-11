import axios from 'axios';

interface I_HttpInfra {
    method: string;
    url: string;
    token?: string;
    body?: object;
}
const httpInfra = async ({ method, url, token, body }: I_HttpInfra) => {
    const defaultHeader = {
        'Content-Type': 'application/json',
    };
    const authHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios({
            method,
            url,
            data: body,
            headers: token ? authHeader : defaultHeader,
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export default httpInfra;
