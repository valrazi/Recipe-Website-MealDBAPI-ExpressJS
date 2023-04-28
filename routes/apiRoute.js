import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        res.render('html/index', {menu: response.data.categories});
    }catch(err){
        res.status(500).json({"msg":err});
    }
})

export default router;