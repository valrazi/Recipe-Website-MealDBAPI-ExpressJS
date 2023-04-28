import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get("/category/:ctgId", async (req, res) =>{
    const ctgId = req.params.ctgId;
    try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctgId}`);
        res.render('html/category', {menu: response.data.meals, params:ctgId});
    }catch(err){
        res.status(500).json({"msg":err});
    }
})

export default router;