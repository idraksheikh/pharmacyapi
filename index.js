const express = require('express');
const request = require('request-promise');


const app = express();
const PORT =8000;

const apiKey = 'c76f87342697c41cc2901443f600d850';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/',(req, res) => {
    res.send("Welcome to my api");
});

//GET Medicine Details
app.get('/medicine/:productId', async (req, res) => {
    const { productId } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.in/dp/${productId}`)
        res.json(JSON.parse(response));
    } catch(error){
        res.json(error);
    }
});

//GET Medicine Review
app.get('/medicine/:productId/review', async (req, res) => {
    const { productId } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.in/product-review/${productId}`)
        res.json(JSON.parse(response));
    } catch(error){
        res.json(error);
    }
});

//GET Medicine Offers
app.get('/medicine/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.in/gp/offer-listing/${productId}`)
        res.json(JSON.parse(response));
    } catch(error){
        res.json(error);
    }
});

//GET Medicine Search
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.in/s?k=${searchQuery}`)
        res.json(JSON.parse(response));
    } catch(error){
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
