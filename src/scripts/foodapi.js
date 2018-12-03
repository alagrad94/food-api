// fetch("http://localhost:8088/food")
//         .then(foods => foods.json())
//         .then(parsedFoods => {

//             parsedFoods.forEach(food => {
                
//                 const foodAsHTML = foodFactory(food)
//                 // addFoodToDom(foodAsHTML)

//             })
//         });

                
// function foodFactory(food){
//     var foodName = food.name;
//     var foodType = food.type;
//     var foodEthnicity = food.ethnicity;
//     var foodID = food.id;

//     console.log (`<article id = "food-${foodID}"><h1>${foodName}</h1> + newLine + ${foodEthnicity} + newLine + ${foodType}</article>`);
//     let foodAsHTML =  `<article id = "food-${foodID}"><h1>${foodName}</h1> + newLine + ${foodEthnicity} + newLine + ${foodType}</article>`
//     return foodAsHTML
// };

// /* <section class = "foodList">



// function addFoodToDom (foodAsHTML) {
    
//     // Create a function that inserts an HTML representation of a food into the DOM
//     var sect = document.getElementById("foodList");
//     var art = document.createElement(foodAsHTML);
    
//     art.appendChild(sect);
// };

    // In main.css ---- Use Flexbox row direction so that you have a horizontal list of items.