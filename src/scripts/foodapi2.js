//Chapter 10 - Exercise 2 - Fetching Other People's Data

// Your job is to query the Open Food Facts API for each of your products, and list the following additional information.

// Ingredients "ingredients_text"
// Country of origin "countries"
// Calories per serving "nutriments -- energy_value"
// Fat per serving "nutriments -- fat_value"
// Sugar per serving "nutriments -- sugars_value"
// Helpful hints: You will need to use the forEach array method to iterate your foods. Inside that forEach, you will need to perform another fetch to get the additional information. The barcode value must be interpolated inside the URL for the inner fetch.

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {

        parsedFoods.forEach(food => {

            let foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    });

function foodFactory(food){

    fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
    .then(response => response.json())
    .then(productInfo => {
        
            let ingredients = productInfo.product.ingredients_text
            let country = productInfo.product.countries
            let calories = productInfo.product.nutriments.energy_value
            let fat = productInfo.product.nutriments.fat_value
            let sugar = productInfo.product.nutriments.sugars_value
            
            let div3 = document.createElement("div");
            let div3Text = document.createTextNode(`Ingredients: ${ingredients}, Country: ${country}, Calories: ${calories}, Fat: ${fat}, Sugar: ${sugar}`);
            div3.appendChild(div3Text);
            console.log(div3);
            
            art.appendChild(div3);
        });
   
    let foodID = food.id;
    let foodName = food.name;
    let foodType = food.type;
    let foodEthnicity = food.ethnicity;
   
    let art = document.createElement("article");
    let artText = document.createTextNode("");
    art.appendChild(artText);
    art.classList.add(`food-${foodID}`);

    let h = document.createElement("h1");
    let hText = document.createTextNode(foodName);
    h.appendChild(hText);
    art.appendChild(h);

    let div1 = document.createElement("div");
    let div1Text = document.createTextNode(foodType);
    div1.appendChild(div1Text);
    art.appendChild(div1);

    let div2 = document.createElement("div");
    let div2Text = document.createTextNode(foodEthnicity);
    div2.appendChild(div2Text);
    art.appendChild(div2);

    return art
};

function addFoodToDom (foodAsHTML) {

    
    document.getElementById("foodList").appendChild(foodAsHTML);

};