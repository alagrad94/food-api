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

            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
            .then(response => response.json())
            .then(productInfo => {
                    
               const additionalInfoAsHTML = additionalInfoFactory(productInfo);
               const foodAsHTML = foodFactory(food);
               addFoodToDom(foodAsHTML, additionalInfoAsHTML);
            })
        })
    });

function foodFactory(food){

    var foodID = food.id;
    var foodName = food.name;
    var foodType = food.type;
    var foodEthnicity = food.ethnicity;
    let foodAsHTML = `${foodID},${foodName}, ${foodEthnicity}, ${foodType}`
    return foodAsHTML
};

function additionalInfoFactory(productInfo){
    
    var ingredients = productInfo.product.ingredients_text
    var country = productInfo.product.countries
    var calories = productInfo.product.nutriments.energy_value
    var fat = productInfo.product.nutriments.fat_value
    var sugar = productInfo.product.nutriments.sugars_value
    
    let additionalInfoAsHTML = `${ingredients},${country}, ${calories}, ${fat}, ${sugar}`
    return additionalInfoAsHTML;
};

function addFoodToDom (foodAsHTML, additionalInfoAsHTML) {

    var art = document.createElement("article");
    var artText = document.createTextNode("");
    art.appendChild(artText);
    art.classList.add(`food-${foodAsHTML.split(",")[0]}`);
    document.getElementById("foodList").appendChild(art);

    var h = document.createElement("h1");
    var hText = document.createTextNode(foodAsHTML.split(",")[1]);
    h.appendChild(hText);
    art.appendChild(h);

    var div1 = document.createElement("div");
    var div1Text = document.createTextNode(foodAsHTML.split(",")[2]);
    div1.appendChild(div1Text);
    art.appendChild(div1);

    var div2 = document.createElement("div");
    var div2Text = document.createTextNode(foodAsHTML.split(",")[3]);
    div2.appendChild(div2Text);
    art.appendChild(div2);

    var div3 = document.createElement("div");
    var div3Text = document.createTextNode(`Ingredients: ${additionalInfoAsHTML.split(",")[0]}, Country: ${additionalInfoAsHTML.split(",")[1]}, Calories: ${additionalInfoAsHTML.split(",")[2]}, Fat: ${additionalInfoAsHTML.split(",")[3]}, Sugar: ${additionalInfoAsHTML.split(",")[0]}`);
    div3.appendChild(div3Text);
    art.appendChild(div3);

};