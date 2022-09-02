const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {

    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body h-100">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">Instruction: ${meal.strInstructions.slice(0, 200)}.</p>
            </div>
        </div>
        
        `
        mealContainer.appendChild(mealDiv)
    })
}


const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value
    // console.log(searchField);
    loadMeals(searchFieldValue);
    searchField.value = "";
}

const loadMealDetail = (idMeal) => {
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `
    detailContainer.appendChild(mealDiv);
}

loadMeals('');