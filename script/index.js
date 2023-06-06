window.onload = () => {

    // getting the recipes
    let recipes;
    fetch('https://keto-is-neato-backend.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => {
        recipes = data.data
    })

}