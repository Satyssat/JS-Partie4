const resultat = document.getElementById("result");
const form = document.querySelector("form");
const input = document.getElementById("search");

console.log(input);
let meals = [];

//
//
//            fetchMeals()
//
//
async function fetchMeals(plat) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + plat)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
  console.log(meals);
}
//
//
//          mealsDisplay()
//
//

function mealsDisplay() {
  if (meals === null) {
    resultat.innerHTML = `<h2>Aucun résultat</h2`;
  } else {
    meals.length = 12;

    resultat.innerHTML = meals
      .map((meal) => {
        let ingredients = [];
        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }

        console.log(ingredients);

        return `
            <li class="card">
              <h2>${meal.strMeal}</h2>
              <p>${meal.strArea}</p>
              <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
              <ul>
              ${ingredients.join("")}
              </ul>
            </li>
          `;
      })
      .join("");
  }
}

//
//
//              input.addEventListener()
//
//
input.addEventListener("input", (e) => {
  // fetchMeals(e.target.value).then(mealsDisplay());
  fetchMeals(e.target.value);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
