import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get("/category/detail/:mealId", async (req, res) =>{
    const mealId = req.params.mealId;
  
    try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const ytLink = response.data.meals[0].strYoutube;
        const newYt = ytLink.replace("watch?v=", "embed/")
        const arrUtils = [
            {"ingredient":response.data.meals[0].strIngredient1,
            "measure":response.data.meals[0].strMeasure1},
            {"ingredient":response.data.meals[0].strIngredient2,
            "measure":response.data.meals[0].strMeasure2},
            {"ingredient":response.data.meals[0].strIngredient3,
            "measure":response.data.meals[0].strMeasure3},
            {"ingredient":response.data.meals[0].strIngredient4,
            "measure":response.data.meals[0].strMeasure4},
            {"ingredient":response.data.meals[0].strIngredient5,
            "measure":response.data.meals[0].strMeasure5},
            {"ingredient":response.data.meals[0].strIngredient6,
            "measure":response.data.meals[0].strMeasure6},
            {"ingredient":response.data.meals[0].strIngredient7,
            "measure":response.data.meals[0].strMeasure7},
            {"ingredient":response.data.meals[0].strIngredient8,
            "measure":response.data.meals[0].strMeasure8},
            {"ingredient":response.data.meals[0].strIngredient9,
            "measure":response.data.meals[0].strMeasure9},
            {"ingredient":response.data.meals[0].strIngredient10,
            "measure":response.data.meals[0].strMeasure10},
            {"ingredient":response.data.meals[0].strIngredient11,
            "measure":response.data.meals[0].strMeasure11},
            {"ingredient":response.data.meals[0].strIngredient12,
            "measure":response.data.meals[0].strMeasure12},
            {"ingredient":response.data.meals[0].strIngredient13,
            "measure":response.data.meals[0].strMeasure13},
            {"ingredient":response.data.meals[0].strIngredient14,
            "measure":response.data.meals[0].strMeasure14},
            {"ingredient":response.data.meals[0].strIngredient15,
            "measure":response.data.meals[0].strMeasure15},
            {"ingredient":response.data.meals[0].strIngredient16,
            "measure":response.data.meals[0].strMeasure16},
            {"ingredient":response.data.meals[0].strIngredient17,
            "measure":response.data.meals[0].strMeasure17},
            {"ingredient":response.data.meals[0].strIngredient18,
            "measure":response.data.meals[0].strMeasure18},
            {"ingredient":response.data.meals[0].strIngredient19,
            "measure":response.data.meals[0].strMeasure19},
            {"ingredient":response.data.meals[0].strIngredient20,
            "measure":response.data.meals[0].strMeasure20}]
       
        
        
        res.render('html/detail', {menu: response.data.meals[0], ytLink:newYt, utils:arrUtils});
    }catch(err){
        res.status(500).json({"msg":err});
    }
})

export default router;