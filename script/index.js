window.onload = () => {

    // grab the recipes div from index.html
    let recipesDiv = document.querySelector('#recipes')

    // getting the recipes
    let recipes;
    fetch('https://keto-is-neato-backend.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => {
        addData(data.data, recipesDiv)
    })

    // iterate through recipes data and add the data to the recipesDiv
    function addData(data, div) {

        data.forEach((recipe) => {

            // create the element that will hold the 'name' of the recipe
            let nameElement = document.createElement('h4')
            // add the recipe 'name' from the API to the created element
            nameElement.innerHTML = recipe.attributes.name

            // create the element that will hold the ingredients
            let listOfIngredients = document.createElement('ul')
            // iterate through each ingredient, add the ingredient as a 'li' element to 'listOfIngredients'
            recipe.attributes.ingredients.forEach((ingredient) => {
                let ingredientElement = document.createElement('li')
                ingredientElement.innerHTML = ingredient
                listOfIngredients.appendChild(ingredientElement)
            })

            // add elements to recipesDiv
            div.appendChild(nameElement)
            div.appendChild(listOfIngredients)

        })
    }

}