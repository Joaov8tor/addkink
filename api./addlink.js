const axios = require('axios');

module.exports = async (req, res) => {
    const { url } = req.query;
    const BASE_URL = 'http://hnode1.roverdev.xyz:27375/api/addlink?url=';

    if (!url) {
        return res.status(400).json({ error: 'Parâmetro "url" é obrigatório.' });
    }

    try {
        const response = await axios.get(`${BASE_URL}${encodeURIComponent(url)}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao acessar a API remota.',
            details: error.message,
        });
    }
};
