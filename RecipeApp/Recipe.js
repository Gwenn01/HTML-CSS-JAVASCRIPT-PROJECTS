// Variables
let home = document.getElementById('home');
let search = document.getElementById('search');
let adobo = document.getElementById('food1');
let tinola = document.getElementById('food2');
let paksiw = document.getElementById('food3');
let sinigang = document.getElementById('food4');
let caldereta = document.getElementById('food5');

let btnAdobo = document.getElementById('adobo');
let btnTinola = document.getElementById('tinola');
let btnPaksiw = document.getElementById('paksiw');
let btnSinigang = document.getElementById('sinigang');
let btnCaldereta = document.getElementById('caldereta');

// for recipe data
let recipe = document.querySelector('.recipe');
let recipeData = [
    {
        ingredient: "20 grams vegetable oil <br> 1 tbsp garlic, crushed <br> 1/2 kg pork belly, sliced <br> 10 g (1 pc) Knorr Pork Cubes <br> 45 ml Knorr Liquid Seasoning <br> 100 ml water <br> 25 ml vinegar <br> 3 pcs laurel leaves <br> 1 tsp brown sugar <br> 2 grams whole black pepper",
        procedure: "Get a pot and make it nice and hot over medium heat. Pour some oil and sauté garlic and onions. Add pork and continue sautéing until cooked. Pour Knorr Liquid Seasoning, water, vinegar, laurel leaves, sugar, and pepper. Add 1pc Knorr Pork Cubes. Bring to a boil and reduce heat to a simmer, make sure that you don't cover the pan to evaporate the vinegar. Cook for 10 more minutes. <br> Remove the meat from the sauce and fry, to add extra crispiness and color to the meat. Return the fried meat in sauce. Reheat and simmer until sauce thickens.",
    },
    {
        ingredient: "1 tbsp cooking oil <br> 1 pc onion, small -sized, chopped <br> 2 cloves garlic, chopped <br> 1 pc ginger, cut into strips <br> ½ kilo chicken, cut into 8 pcs <br> 4 cups water <br> 2 pcs Knorr chicken cubes <br> 1 pc chayote or 1 pc small - sized green papaya, sliced <br> 2 stalks moringa leaves",
        procedure: "Get a pot and bring it up to medium heat before pouring in the oil. Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes or until you can smell the lovely aroma. It’s time to drop in the chicken pieces and stir until it turns white or light brown in color. Pour in the water and add your Knorr Chicken Broth cubes. Bring this to a simmer until chicken is tender and cooked through. You can now add your sayote or green papaya and cook until tender. Dahon ng sili is added at the last stage to ensure leaves (and nutrients) don’t dry up. Give this a minute then it is done. Malunggay is also another healthy alternative because it is packed with vitamins and minerals which are good for nursing moms and kids as well. Enjoy this with patis and calamansi on the side. See the faces of your whole family light up as you bring this to the table."
    },
    {
        ingredient: "1 cup water <br> 1/2 cup white vinegar <br> 2 tsp salt <br> 1 tsp peppercorn whole <br>  1 pc medium bangus, cut into 4 parts <br> 4 clove garlic chopped <br> 1 pc onion, sliced <br> pinch of pepper <br> 2 pcs laurel leaves <br> 1 pc talong sliced into rings <br> 22 g (1 pack) Knorr Sinigang Mix",
        procedure: "Heat a medium pan with water, vinegar, salt and whole peppercorn combined. Bring to a boil, uncovered. Add the fish and let it simmer with the remaining vegetables, garlic, onion, sliced ginger, laurel leaves and eggplant. Mixed in the Knorr Siniggang Mix. Cover and let it simmer for around 15-20 mins. Serve hot and enjoy this simple dish. "
    },
    {
        ingredient: "500 grams pork ribs <br> 8 cups water <br> 8 medium-sized tomatoes, sliced <br> 1 pc red onion <br> 3 pcs siling pansigang <br> 1 stalk kangkong <br> 1 pc okra <br> 3 pcs gabi <br> 1 pack Knorr Sinigang sa Sampalok Original Mix 44g <br> 1 tbsp fish sauce <br> 1 tbsp salt",
        procedure: "Boil the pork ribs in 8 cups of water for 15-20 minutes. Add salt. Remember to remove the scum that lift to the surface. Add in tomatoes and onions. Let it simmer until tomatoes are soft and tender. Crush the tomatoes to release more flavors. Add 2 cups of water while the pork meat continues to soften. Add in the siling pansigang & 1 pack of Knorr Sinigang sa Sampalok Original Mix. Add okra, gabi, and kangkong. Continue to simmer for 2 minutes."
    }, 
    {
        ingredient: "1/2 kg pork ribs <br> 3 cups water <br> 3 tbsp cooking oil <br> 4 cloves garlic, minced <br> 1 pc onion, minced <br> 2 pcs Spanish chorizo or sausage sliced <br> 1 can liver spread <br> 3 pcs laurel leaves <br> 1 pack (250 g) tomato sauce <br> 1 pc Knorr Pork Cube <br> 1/2 tsp sugar <br> ground black pepper, to taste <br> 1 pc medium-sized potatoes, cut into cubes <br> 1 pc medium-sized carrots, cut into cubes <br> 50 g pitted black olives <br>  1 pc red bell pepper, seeds removed and sliced <br> 1 pc green bell pepper, seeds removed and sliced",
        procedure: "Get a large pot and make it nice and hot over medium-high heat. Fill it with 3 cups of water then add the pork ribs. Boil at high heat and bring down to a simmer for 30 minutes or until meat is tender. Remember to remove the scum rising to the top of the liquid. Remove meat from pot, and set aside and strain the broth. Get another pan ready and make it nice and hot over medium heat. Pour oil and sauté garlic and onions. Add the tender pork, chorizo, liver spread, laurel, tomato sauce, Knorr Pork Broth Cube, sugar, pepper and broth. Bring to a boil and simmer until slightly thick in consistency. Throw in the potato and carrots next then simmer until cooked before adding the  bell peppers and olives. Cook for another 2 minutes and that’s our dish! It’s always a joy when you see Festive Pork Caldereta being served in the table by your mom.  You know you can always count on this dish for this is home."
    }
];
// Functionality for search
search.addEventListener("input", () => {
    displayFoods();
    if(search.value == "Adobo" || search.value == "adobo"){
        tinola.style.display = 'none';
        paksiw.style.display = 'none';
        sinigang.style.display = 'none';
        caldereta.style.display = 'none';
    }else if(search.value == "Tonola" || search.value == "tinola"){
        adobo.style.display = 'none';
        paksiw.style.display = 'none';
        sinigang.style.display = 'none';
        caldereta.style.display = 'none';
    }else if(search.value == "Paksiw" || search.value == "paksiw"){
        adobo.style.display = 'none';
        tinola.style.display = 'none';
        sinigang.style.display = 'none';
        caldereta.style.display = 'none';
    }else if(search.value == "Sinigang" || search.value == "sinigang"){
        adobo.style.display = 'none';
        tinola.style.display = 'none';
        paksiw.style.display = 'none';
        caldereta.style.display = 'none';
    }else if(search.value == "Caldereta" || search.value == "caldereta"){
        adobo.style.display = 'none';
        tinola.style.display = 'none';
        paksiw.style.display = 'none';
        sinigang.style.display = 'none';
    }
});
function displayFoods(){
    adobo.style.display = 'block';
    tinola.style.display = 'block';
    paksiw.style.display = 'block';
    sinigang.style.display = 'block';
    caldereta.style.display = 'block';
}
// functionality for recipes

btnAdobo.addEventListener('click', () => {
    let tempHtml = `
        <h1>Adobo</h1>
        <h2>Ingredient</h2>
        <p>${recipeData[0].ingredient}</p>
        <h2>Procedure</h2>
        <p>${recipeData[0].procedure}</p>
    `;
    recipe.innerHTML = tempHtml;
});
btnTinola.addEventListener('click', () => {
    let tempHtml = `
        <h1>Tinola</h1>
        <h2>Ingredient</h2>
        <p>${recipeData[1].ingredient}</p>
        <h2>Procedure</h2>
        <p>${recipeData[1].procedure}</p>
    `;
    recipe.innerHTML = tempHtml;
});
btnPaksiw.addEventListener('click', () => {
    let tempHtml = `
        <h1>Paksiw</h1>
        <h2>Ingredient</h2>
        <p>${recipeData[2].ingredient}</p>
        <h2>Procedure</h2>
        <p>${recipeData[2].procedure}</p>
    `;
    recipe.innerHTML = tempHtml;
});
btnSinigang.addEventListener('click', () => {
    let tempHtml = `
        <h1>Sinigang</h1>
        <h2>Ingredient</h2>
        <p>${recipeData[3].ingredient}</p>
        <h2>Procedure</h2>
        <p>${recipeData[3].procedure}</p>
    `;
    recipe.innerHTML = tempHtml;
});
btnCaldereta.addEventListener('click', () => {
    let tempHtml = `
        <h1>Caldereta</h1>
        <h2>Ingredient</h2>
        <p>${recipeData[4].ingredient}</p>
        <h2>Procedure</h2>
        <p>${recipeData[4].procedure}</p>
    `;
    recipe.innerHTML = tempHtml;
});
home.addEventListener('click', () => {
    recipe.innerHTML = "";
});







