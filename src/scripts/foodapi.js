fetch("http://localhost:8088/food")
        .then(foods => foods.json())
        .then(parsedFoods => {

            parsedFoods.forEach(food => {
                let foodAsHTML = foodFactory(food)
                addFoodToDom(foodAsHTML)

            })
        });

function foodFactory(food){
    
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