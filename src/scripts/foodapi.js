fetch("http://localhost:8088/food")
        .then(foods => foods.json())
        .then(parsedFoods => {

            parsedFoods.forEach(food => {
                const foodAsHTML = foodFactory(food)
                console.log(foodAsHTML)
                addFoodToDom(foodAsHTML)

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

function addFoodToDom (foodAsHTML) {

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
};